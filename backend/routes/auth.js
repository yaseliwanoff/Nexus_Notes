const express = require('express')
const router = express.Router()
const { db } = require('../config/firebase')
const { hashPassword, comparePassword, generateToken } = require('../utils/helpers')
const { authenticateToken } = require('../middleware/auth')

/**
 * POST /api/register
 */
router.post('/register', async (req, res) => {
  const { fName, lName, email, password, password_confirmation } = req.body

  // Validation
  if (!fName || !lName || !email || !password || !password_confirmation) {
    return res.status(422).json({ message: 'All fields are required' })
  }

  if (password !== password_confirmation) {
    return res.status(422).json({ message: 'Passwords do not match' })
  }

  if (password.length < 6) {
    return res.status(422).json({ message: 'Password must be at least 6 characters' })
  }

  try {
    // Проверяем, нет ли уже такого email
    const existing = await db.collection('users').where('email', '==', email).limit(1).get()
    if (!existing.empty) {
      return res.status(422).json({ message: 'Email already in use' })
    }

    const hashedPassword = await hashPassword(password)

    const newUser = {
      fName,
      lName,
      full_name: `${fName} ${lName}`,
      email,
      password: hashedPassword,
      api_token: null,
      createdAt: new Date().toISOString(),
    }

    const docRef = await db.collection('users').add(newUser)

    return res.status(201).json({
      message: 'User registered successfully',
      data: {
        id: docRef.id,
        email: newUser.email,
        full_name: newUser.full_name,
      },
    })
  } catch (err) {
    console.error('Register error:', err)
    return res.status(500).json({ message: 'Registration failed' })
  }
})

/**
 * POST /api/login
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).json({ message: 'Email and password are required' })
  }

  try {
    const snapshot = await db.collection('users').where('email', '==', email).limit(1).get()

    if (snapshot.empty) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const userDoc = snapshot.docs[0]
    const user = userDoc.data()

    const isValid = await comparePassword(password, user.password)
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Генерируем новый токен при каждом логине
    const api_token = generateToken()

    await db.collection('users').doc(userDoc.id).update({ api_token })

    return res.json({
      message: 'Login successful',
      data: {
        id: userDoc.id,
        email: user.email,
        full_name: user.full_name,
        api_token,
      },
    })
  } catch (err) {
    console.error('Login error:', err)
    return res.status(500).json({ message: 'Login failed' })
  }
})

/**
 * POST /api/logout
 * Требует авторизации
 */
router.post('/logout', authenticateToken, async (req, res) => {
  try {
    // Инвалидируем токен — зануляем в Firestore
    await db.collection('users').doc(req.user.id).update({ api_token: null })

    return res.json({ message: 'Logged out successfully' })
  } catch (err) {
    console.error('Logout error:', err)
    return res.status(500).json({ message: 'Logout failed' })
  }
})

module.exports = router

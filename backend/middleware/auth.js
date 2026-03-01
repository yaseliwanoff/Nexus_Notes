const { db } = require('../config/firebase')

async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'No token provided' })
  }

  try {
    const usersRef = db.collection('users')
    const snapshot = await usersRef.where('api_token', '==', token).limit(1).get()

    if (snapshot.empty) {
      return res.status(401).json({ message: 'Invalid or expired token' })
    }

    const userDoc = snapshot.docs[0]
    req.user = { id: userDoc.id, ...userDoc.data() }
    next()
  } catch (err) {
    console.error('Auth middleware error:', err)
    return res.status(500).json({ message: 'Authentication error' })
  }
}

module.exports = { authenticateToken }

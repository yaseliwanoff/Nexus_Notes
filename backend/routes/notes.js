const express = require('express')
const router = express.Router()
const { db } = require('../config/firebase')
const { authenticateToken } = require('../middleware/auth')

router.get('/notes', async (req, res) => {
  try {
    const snapshot = await db.collection('notes')
      .where('userId', '==', req.user.id)
      .get()

    const notes = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    res.json({ data: notes })
  } catch (err) {
    console.error('GET /notes error:', err)
    res.status(500).json({ message: 'Failed to fetch notes', error: err.message })
  }
})

router.post('/notes', async (req, res) => {
  try {
    const { title, description, tags, data } = req.body

    if (!title) {
      return res.status(422).json({ message: 'Title is required' })
    }

    const note = {
      title,
      description: description || '',
      tags: tags || [],
      data: data || new Date().toISOString().split('T')[0],
      userId: req.user.id,
      createdAt: new Date().toISOString()
    }

    const ref = await db.collection('notes').add(note)
    res.status(201).json({ data: { id: ref.id, ...note } })
  } catch (err) {
    console.error('POST /notes error:', err)
    res.status(500).json({ message: 'Failed to create note', error: err.message })
  }
})

module.exports = router

const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const notesRoutes = require('./routes/notes')
const { authenticateToken } = require('./middleware/auth')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3001',
  credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Публичные роуты (без токена)
app.use('/api', authRoutes)

app.use(cors({
  origin: [
    'http://localhost:3001',
    'https://nexus-notes.up.railway.app/'
  ],
  credentials: true,
}))

// Защищённые роуты (с токеном)
app.use('/api', authenticateToken, userRoutes)
app.use('/api', authenticateToken, notesRoutes)

app.get('/health', (req, res) => res.json({ status: 'ok' }))

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

module.exports = app

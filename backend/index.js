const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const notesRoutes = require('./routes/notes')
const { authenticateToken } = require('./middleware/auth')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://nexus-notes.vercel.app',
    'https://nexus-notes-223-emp4qmd2w-yaroslavs-projects-37ebbfd6.vercel.app'
  ],
  credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', authRoutes)
app.use('/api', authenticateToken, userRoutes)
app.use('/api', authenticateToken, notesRoutes)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

module.exports = app

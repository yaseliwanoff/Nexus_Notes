const express = require('express')
const router = express.Router()

/**
 * GET /api/user
 * Возвращает данные текущего авторизованного пользователя
 * (req.user заполняется middleware authenticateToken)
 */
router.get('/user', (req, res) => {
  const { id, fName, lName, full_name, email } = req.user

  return res.json({
    data: {
      id,
      fName,
      lName,
      full_name,
      email,
    },
  })
})

module.exports = router

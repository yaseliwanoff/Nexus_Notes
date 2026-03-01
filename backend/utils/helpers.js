const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const SALT_ROUNDS = 10

/**
 * Хеширует пароль
 */
async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS)
}

/**
 * Сравнивает открытый пароль с хешем
 */
async function comparePassword(password, hash) {
  return bcrypt.compare(password, hash)
}

/**
 * Генерирует случайный API-токен
 */
function generateToken() {
  return crypto.randomBytes(40).toString('hex')
}

module.exports = { hashPassword, comparePassword, generateToken }

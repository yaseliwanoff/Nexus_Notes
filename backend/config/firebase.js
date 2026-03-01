const admin = require('firebase-admin')

console.log('FIREBASE_SERVICE_ACCOUNT exists:', !!process.env.FIREBASE_SERVICE_ACCOUNT)
console.log('First 50 chars:', process.env.FIREBASE_SERVICE_ACCOUNT?.slice(0, 50))

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()
module.exports = { db }
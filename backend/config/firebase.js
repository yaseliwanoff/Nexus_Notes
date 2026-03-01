const admin = require('firebase-admin')

let serviceAccount

try {
  serviceAccount = require('./serviceAccountKey.json')
} catch (e) {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  } else {
    console.error('Firebase service account not found!', e)
    process.exit(1)
  }
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
}

const db = admin.firestore()
const auth = admin.auth()

module.exports = { admin, db, auth }

import firebase from 'firebase/compat/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import 'firebase/compat/firestore'

//const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
}

var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.firestore()
export const storage = getStorage(firebaseApp)
export const auth = getAuth(firebaseApp)
export default db

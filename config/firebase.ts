import { initializeApp, FirebaseApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"

let firebaseApp: FirebaseApp

const firebaseConfig = {
  apiKey: "AIzaSyB4Y9Wi2gReOLj6m83JTI8_QIFcDcQnHlw",
  authDomain: "yveszendja.firebaseapp.com",
  projectId: "yveszendja",
  storageBucket: "yveszendja.appspot.com",
  messagingSenderId: "253473225603",
  appId: "1:253473225603:web:253051de0db9548a30d4b6",
}

// Initialize Firebase
if (getApps().length) {
  firebaseApp = getApp()
} else {
  firebaseApp = initializeApp(firebaseConfig)
}

export default firebaseApp

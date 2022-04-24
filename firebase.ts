// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC7Mk65pePXMgXzX_-vKool3U70ToQdJ5w',
	authDomain: 'netflix-clone-next-tailwind-ts.firebaseapp.com',
	projectId: 'netflix-clone-next-tailwind-ts',
	storageBucket: 'netflix-clone-next-tailwind-ts.appspot.com',
	messagingSenderId: '972545363313',
	appId: '1:972545363313:web:f1d07b14b57dc4777afad0',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }

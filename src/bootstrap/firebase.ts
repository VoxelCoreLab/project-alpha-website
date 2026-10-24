import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Auth initialization (incl. the accounts:lookup request for a persisted user)
// runs in the background; consumers that need it use auth.authStateReady().
export function setupFirebase(firebaseConfig: FirebaseOptions) {
    initializeApp(firebaseConfig)
    getAuth()
}

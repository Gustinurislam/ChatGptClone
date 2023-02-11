import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBR-q0xd_8vM0e7fxqpNzLqxR7tUPGJ_1Q',
  authDomain: 'chatgpt-messenger-6d96e.firebaseapp.com',
  projectId: 'chatgpt-messenger-6d96e',
  storageBucket: 'chatgpt-messenger-6d96e.appspot.com',
  messagingSenderId: '1088576680717',
  appId: '1:1088576680717:web:be3bf0109b751ca7f97644',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

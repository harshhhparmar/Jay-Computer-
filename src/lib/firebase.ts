import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const env = (import.meta as any).env;

const firebaseConfig = {
  projectId: env.VITE_FIREBASE_PROJECT_ID || "tactical-handbook-k6ppv",
  appId: env.VITE_FIREBASE_APP_ID || "1:781141328221:web:5c2791727f927a324968b4",
  apiKey: env.VITE_FIREBASE_API_KEY || "AIzaSyDZsTSBza-WXp_cesU4YOmTNzGW2pRsyjA",
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || "tactical-handbook-k6ppv.firebaseapp.com",
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || "tactical-handbook-k6ppv.firebasestorage.app",
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || "781141328221",
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore with the specific database ID provided in the config
export const db = getFirestore(app, "ai-studio-1a58e62c-0b68-4803-bbf5-54a529671515");
export const auth = getAuth(app);
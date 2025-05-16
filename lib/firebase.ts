import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDBxwwysf46vBNznJla7lMkX0PQ0dNGw9c",
  authDomain: "qrcode-gen-8f438.firebaseapp.com",
  projectId: "qrcode-gen-8f438",
  storageBucket: "qrcode-gen-8f438.firebasestorage.app",
  messagingSenderId: "485082584105",
  appId: "1:485082584105:web:f921d8100f390c72807838",
  measurementId: "G-8T7SC4M26D"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

// Initialize Analytics
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, auth, analytics }; 
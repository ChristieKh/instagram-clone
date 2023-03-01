// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFireStore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBzb6aiWqLvV06H5QM9UH9CofTmasUgk4",
  authDomain: "insta-yt-2d910.firebaseapp.com",
  projectId: "insta-yt-2d910",
  storageBucket: "insta-yt-2d910.appspot.com",
  messagingSenderId: "203630384915",
  appId: "1:203630384915:web:e31507649d1f0201122ce6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();

export { app, db, storage };
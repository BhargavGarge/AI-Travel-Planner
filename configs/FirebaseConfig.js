import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcKtxOe3l66i1aEYq1NMi2V2RUPuyU2Cw",
  authDomain: "roamly-95733.firebaseapp.com",
  projectId: "roamly-95733",
  storageBucket: "roamly-95733.firebasestorage.app",
  messagingSenderId: "642309317486",
  appId: "1:642309317486:web:426382fc82cab03d3c977f",
  measurementId: "G-5P8TW7NB3Q",
};

// Initialize Firebase App (Ensure it's not already initialized)
let app;
if (!global.firebaseApp) {
  app = initializeApp(firebaseConfig);
  global.firebaseApp = app; // Store the app instance globally
} else {
  app = global.firebaseApp; // Reuse the already initialized app
}

// Initialize Firebase Auth (Only once)
let auth;
if (!global.firebaseAuth) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
  global.firebaseAuth = auth;
} else {
  auth = global.firebaseAuth;
}

// Initialize Firestore
export const db = getFirestore(app);
export { app, auth };

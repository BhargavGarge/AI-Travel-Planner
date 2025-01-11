import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

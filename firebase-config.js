// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXZU6YdU-yj-KRKAUDrxyaxp-C4VZ4_E",
  authDomain: "temookan.firebaseapp.com",
  projectId: "temookan",
  storageBucket: "temookan.firebasestorage.app",
  messagingSenderId: "611561332773",
  appId: "1:611561332773:web:838975421a525baa589fcc",
  measurementId: "G-L0L6TKVBRX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

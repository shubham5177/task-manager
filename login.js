// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// 🔐 Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDLsxj7wMxH1GrlPYdGQY4MN6Dcy_c1Vhw",
  authDomain: "task-manager-a139d.firebaseapp.com",
  projectId: "task-manager-a139d",
  storageBucket: "task-manager-a139d.firebasestorage.app",
  messagingSenderId: "585896791984",
  appId: "1:585896791984:web:b881479da07b4901375075",
  measurementId: "G-4H7JV2C1R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ SIGNUP FUNCTION
window.signupUser = async function (event) {
  event.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
  } catch (error) {
    alert("Signup failed: " + error.message);
  }
};

// ✅ LOGIN FUNCTION
window.loginUser = async function (event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
};

// ✅ LOGOUT FUNCTION
window.logoutUser = async function () {
  try {
    await signOut(auth);
    alert("You have been logged out.");
    window.location.href = "login.html";
  } catch (error) {
    alert("Logout failed: " + error.message);
  }
};

// ✅ DASHBOARD PROTECTION
window.protectDashboard = function () {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      document.getElementById("welcome-user").innerText = `Welcome, ${user.email}`;
    } else {
      alert("You must be logged in to view this page.");
      window.location.href = "login.html";
    }
  });
};

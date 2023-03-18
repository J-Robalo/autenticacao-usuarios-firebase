import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAw3M4X-EoXqcFYd6eO2KZlbkafmccFI1c",
  authDomain: "formlogin-b83ee.firebaseapp.com",
  projectId: "formlogin-b83ee",
  storageBucket: "formlogin-b83ee.appspot.com",
  messagingSenderId: "44161584714",
  appId: "1:44161584714:web:9a370ab89bbe331ea9e0b3",
};

const app = initializeApp(firebaseConfig);

document.getElementById("reg-btn").addEventListener("click", function () {
  document.getElementById("register-div").style.display = "inline";
  document.getElementById("login-div").style.display = "none";
});

document.getElementById("log-btn").addEventListener("click", function () {
  document.getElementById("register-div").style.display = "none";
  document.getElementById("login-div").style.display = "inline";
});

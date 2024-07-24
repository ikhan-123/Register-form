
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  


  const firebaseConfig = {
    apiKey: "AIzaSyD0TQIV-zoMfdYwQcJHp7aQv2-uV2CXof8",
    authDomain: "login-form-ecf08.firebaseapp.com",
    projectId: "login-form-ecf08",
    storageBucket: "login-form-ecf08.appspot.com",
    messagingSenderId: "911138005063",
    appId: "1:911138005063:web:98ab26eb8c6e4e40409162",
    measurementId: "G-B62VP8RYN1"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 

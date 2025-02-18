import { initializeApp } from "firebase/app";


//console.log(process.env.process.env.NEXT_PUBLIC_ApiKey)
const firebaseConfig = {
  apiKey: "AIzaSyBqer9_ROTkBIZiN-Qa3wOO5WufNHeX8KA",
  authDomain: "nstu-medical.firebaseapp.com",
  projectId: "nstu-medical",
  databaseURL: "https://nstu-medical-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "nstu-medical.firebasestorage.app",
  messagingSenderId: "963214538609",
  appId: "1:963214538609:web:8be4ceaf846b1b6dcba8d0",
  measurementId: "G-J112G4PMDP"
  };
  
  
  const app = initializeApp(firebaseConfig);
  
  export default app;
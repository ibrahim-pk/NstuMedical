"use client"

import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// 🔹 Firebase Configuration (নিজের Firebase API Key বসাও)


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

// 🔹 Firebase Init
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const AmbulanceTracker = () => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(position.coords)
          // 🔹 Firebase Database-এ লোকেশন আপডেট করা
          set(ref(database, "ambulance/location"), {
            latitude,
            longitude,
            timestamp: Date.now(),
          });
        },
        (error) => {
          console.error("Error fetching location:", error);
        },
        { enableHighAccuracy: true, maximumAge: 0 }
      );
      console.log(watchId);

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  return(
    <div className="mx-auto max-w-screen-lg max-h-screen-lg py-5 px-5 md:px-0">
      <h2 className="my-5 font-bold text-xl">🚑 Tracking Started... Keep this page open!</h2>
      <img  src="/images/tracker.png"  alt="loctation tracking"/>
    </div>
  );
};

export default AmbulanceTracker;

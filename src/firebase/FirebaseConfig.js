import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey:process.env.NEXT_PUBLIC_ApiKey,
    authDomain: process.env.NEXT_PUBLIC_AuthDomain,
    projectId: process.env.NEXT_PUBLIC_ProjectId,
    storageBucket:process.env.NEXT_PUBLIC_StorageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_MessagingSenderId,
    appId: process.env.NEXT_PUBLIC_AppId
  };
  
  
  const app = initializeApp(firebaseConfig);
  export default app;
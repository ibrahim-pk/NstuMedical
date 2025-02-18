"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "@/firebase/FirebaseConfig";
import toast, { Toaster } from "react-hot-toast";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    //auth
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,password}),
      });

      const data = await response.json();
     //console.log(data)
      if (data?.success) {
        toast.success(
          `${data?.message}`,
          2000
        );
        localStorage.setItem("token", data?.data);
        localStorage.setItem("userInfo", JSON.stringify(data?.userInfo));
        window.location.href="/"
      } else {
        toast.error(`${data?.message}`,2000);
      }
    } catch (error) {
      toast.error(`${error?.message}`,2000);
    }
  };

  const handleSignin = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
       // console.log(user.providerData[0].email);
  
        let verifyEmail = user?.providerData[0]?.email.includes("student.nstu.edu.bd");
  
        if (verifyEmail) {
          try {
            const response = await fetch("http://localhost:5000/api/v1/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: user?.providerData[0]?.email,
                name: user?.providerData[0]?.displayName,
                ref:"google",
                photoURL: user?.providerData[0]?.photoURL,
              }),
            });
  
            const data = await response.json();
           //console.log(data)
            if (data?.success) {
              toast.success(
                `${user?.providerData[0]?.displayName} ${data?.message}`,
                2000
              );
              localStorage.setItem("token", data?.data);
              localStorage.setItem("userInfo", JSON.stringify(data?.userInfo));
              window.location.href="/"
            } else {
              toast.error(`${data?.message}`,2000);
            }
          } catch (error) {
            toast.error(`${error?.message}`,2000);
          }
        } else {
          toast.error(`Invalid email`,2000);
        }
      })
      .catch((error) => {
        console.log("Signin Error:", error.message);
      });
  };
  



  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">Login with edu mail</h2>
    
        {/* Login Form */}
        <Toaster position="top-center" reverseOrder={false} />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="relative mt-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="relative text-center">
            <span className="bg-white px-2 text-gray-500">Or</span>
          </div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleSignin}
          className="w-full mt-4 flex items-center justify-center gap-2 border p-2 rounded-lg hover:bg-gray-200 transition"
        >
          <FcGoogle className="text-2xl" />
          <span>Log in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;

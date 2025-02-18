"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get token from localStorage
   console.log("token:",token)
    if (!token) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, []);

  return <>{children}</>;
}

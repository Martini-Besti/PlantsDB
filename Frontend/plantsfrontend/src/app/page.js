

"use client"
import Login from "@/components/Login";
import { ApiClient } from "../../apiclient/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  
  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    //router.push("/dashboard"); // Redirect to dashboard after login
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/"); // Redirect back to login page
  };

  const client = new ApiClient(() => token, logout);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);


  // If there's a token, render the Dashboard directly
  if (token) {
    return (
      <div>
        {/* Render Dashboard or other protected content here */}
        {/* <div>Welcome back! You are logged in.</div>
        <button onClick={logout}>Logout</button> */}
        <Dashboard 
        
          client={client}
        />
      </div>
    );
  }

  // Otherwise, show the login form
  return (
    <div>
      <Login client={client} login={login} />
    </div>
  );
}


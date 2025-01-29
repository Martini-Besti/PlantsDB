
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // If there's no token, redirect to login page
      router.push("/");
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    return null; // Optionally show a loading spinner until token is checked
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>You are successfully logged in.</p>
    </div>
  );
};

export default Dashboard;

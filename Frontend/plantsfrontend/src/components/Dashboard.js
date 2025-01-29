"use client"
import React, { useEffect, useState } from 'react'

import { useRouter } from "next/navigation";

import AddForm from'@/components/AddForm'
import PlantCard from '@/components/PlantCard'

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
        <AddForm />
        <PlantCard />
    </div>
  )
}

export default Dashboard

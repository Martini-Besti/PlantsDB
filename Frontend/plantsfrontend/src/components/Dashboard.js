"use client"
import React, { useEffect, useState } from 'react'

import { useRouter } from "next/navigation";

import AddForm from'@/components/AddForm'
import PlantCard from '@/components/PlantCard'
import AddButton from './AddButton';

const Dashboard = ({client}) => {

  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [plants, setPlants] = useState([])

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      // If there's no token, redirect to login page
      router.push("/");
    } else {
      setIsLoggedIn(true);
      const fetchData = async () => {
        try {
          const data = await client.getPlants();
          console.log(data);
          setPlants(data.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData()

    }
  }, []);

  if (!isLoggedIn) {
    return null; // Optionally show a loading spinner until token is checked
  }

  return (
    <div>

        <AddForm 
          client={client}
        />
        <PlantCard />
        {
          plants?.map(plant => {
            return <div key={plant._id}>
              {plant.name}
            </div>
          })
        }
        {/*<AddButton />*/}

    </div>
  )
}

export default Dashboard

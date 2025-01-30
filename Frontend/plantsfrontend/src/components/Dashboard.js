"use client"
import React, { useEffect, useState } from 'react'

import { useRouter } from "next/navigation";

import AddForm from'@/components/AddForm'
import PlantCard from '@/components/PlantCard'
import AddButton from './AddButton';

const Dashboard = ({client}) => {

  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [plants, setPlants] = useState([])

  const fetchData = async () => {
    try {
      const data = await client.getPlants();
      console.log(data);
      setPlants(data.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const clickAddPlant = () => {
    setIsFormVisible(true)
  }

  const hideAddPlant = () => {
    setIsFormVisible(false)
  }

  const deletePlant = (id) => {
    client.deletePlant(id) 
    fetchData()
  }

  const submitForm = async (e) => {
    
    // pass the data from the form to this method to send it to the database. 

    e.preventDefault()
    const nameInput = document.getElementById('Plant Name')
    const wateringInput = document.getElementById('Watering Frequency (Days)')
    
    await client.addPlant(
      {
        "name": nameInput.value,
        "watering": wateringInput.value
      }
    )

    fetchData()
    
  }

  

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      // If there's no token, redirect to login page
      router.push("/");
    } else {
      setIsLoggedIn(true);
      fetchData()
    }
  }, []);

  if (!isLoggedIn) {
    return null; // Optionally show a loading spinner until token is checked
  }

  return (
    <div>

        { 
          !isFormVisible ? '' :
          <AddForm 
            client={client}
            hideFunction={hideAddPlant}
            submitFunction={submitForm}
          />
        }

        <AddButton showFunction={clickAddPlant} />

        {
          plants?.map(plant => {
            return 
            <div key={plant._id}>
              {plant.name}
            </div>
          })
        }

        {

          plants?.map(plant => (
            <PlantCard  
            key={plant._id}
            plantName={plant.name} 
            daysUntilWater={plant.watering}
            deletePlant={() => deletePlant(plant._id)}/>
          ))

        }

    </div>
  )
}

export default Dashboard

// this file is for routes, end points
const express = require("express")
const router = express.Router(); 
const plants = require("./Controller")

router.get("/plants", plants.getAllPlants);
router.post("/plants/create", plants.createPlant);
router.get("/plants/currentuser", plants.getPlantsByUser);
router.delete("/plants/:id", plants.deletePlant);
router.put("/plants/:id", plants.updatePlant);

module.exports = router;

// types of requests (end points)
// get - used to retrieve data
// post - create a new todo data
// put - update exisiting data
// delete - deletes data
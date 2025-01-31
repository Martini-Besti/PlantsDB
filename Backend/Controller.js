const createError = require("http-errors");

const User = require("./schema/User");
const Plant = require("./schema/Plants");

exports.getAllPlants = async (req, res, next) => {
  try {
    const plants = await Plant.find();
    res.send(plants);
  } catch (error) {
    next(createError(500, error.message));
  }
};

exports.createPlant = async (req, res, next) => {

  try {
    console.log(req.headers["authorization"])
    const { name, watering } = req.body;

    const user = await User.find({ token: req.headers['authorization'] });
    console.log(user)

    // fetch the user using the token in the headers
    // then with the user you retreive, grab the id and pass it to the plant below

    const newPlant = await Plant.create({
      name,
      watering,
      user: user[0]._id,
      lastWatered: new Date(), // Set the current date as the last watered date

    });
    console.log(newPlant)
    res.send(newPlant);
  } catch (error) {
    next(createError(500, error.message));
  }

};



//from class:

exports.getPlantsByUser = async (req, res, next) => {
  try {

    const user = await User.find({ token: req.headers['authorization'] });
    const plant = await Plant.find({ user: user[0]._id }).populate("user");
    
    if (!plant) {
      return next(createError(404, "no plant with that id"));
    }
    
    res.send(plant);
  } catch (error) {
    next(createError(500, error.message));
  }
}

exports.deletePlant = async (req, res, next) => {
  const id = req.params.id;
  try {
    const plant = await Plant.findByIdAndDelete(id);
    if (!plant) {
      return next(createError(404, "No plant with that id"));
    }
    res.send(plant);
  } catch (error) {
    next(createError(500, error.message));
  }
};

exports.updatePlant = async (req, res, next) => {
  const { name, watering } = req.body;
  const id = req.params.id;

  //   const plant = plants.find((plant) => plant.id == parseInt(id));

  try {
    const plant = await Plant.findByIdAndUpdate(
      id, 
      {
        name,
        watering
      }, 
      { new: true }
    );
    if (!plant) {
      return res.send("plant not found");
    }
    res.send(plant);
  } catch (error) {
    next(createError(500, error.message));
  }
};
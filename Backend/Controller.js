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

    const user = User.find( { token: req.headers['authorization'] } );

    // fetch the user using the token in the headers
    // then with the user you retreive, grab the id and pass it to the plant below

    const newPlant = await Plant.create({
      name,
      watering,
      user: user.id
    });
    res.send(newPlant);
  } catch (error) {
    next(createError(500, error.message));
  }

};

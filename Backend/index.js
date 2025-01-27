const express = require("express");
const app = express(); 
const port = 3001;
const router = require("./router");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const User = require("./schema/User");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");


// for specif requests you can add them to cors  inside curly braces. e.g. {origin: "http://localhost:3000"}
app.use(cors());

dotenv.config();

connectDB();

app.use(express.json());

// checks for user 
// we can use https error library here
app.post("/todos/auth", async (req, res) => {
    console.log("arrived");
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.sendStatus(401);
    }
    if (req.body.password !== user.password) {
      return res.sendStatus(403);
    }
    user.token = uuidv4();
    await user.save();
    res.send({ token: user.token });
  });
  
  // Authorization middleware. bouncer/barrier
  app.use(async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const user = await User.findOne({ token: authHeader });
    if (user) {
      next();
    } else {
      res.sendStatus(403);
    }
  });

app.use(router);

// make a get request
// / represents the end point 
// we call a function when "/" is called 
// 2 parameters, req, and res
// res is response

// request will contain request body, headers etc
// response is used to send back info to client (person who made the request)
// app.get("/", (req, res) => {
// res.send("Hello World");
// })

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
})

// // so when type localhost:3000/test, web browser displays "is this thing on"

// app.get("/test", (req, res) => {
//     res.send("Is this thing on?")
// })

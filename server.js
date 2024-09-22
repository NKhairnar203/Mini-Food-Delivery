const express = require("express");
const connection = require("./config/db");
const hotelRoute = require("./routes/hotel.route");
const server = express();
server.use(express.json());

server.use("/hotel/dishes",hotelRoute)
server.use("/agent", hotelRoute);

server.listen(3000,async()=>{
  try {
    await connection;
    console.log("MongoDB Successfully Connected...");
    console.log("Server Also Run Smoothly on Port - 3000")
  } catch (error) {
    console.log(error)
  }
})
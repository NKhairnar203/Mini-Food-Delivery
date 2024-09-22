const express = require("express");
const dishesModel = require("../models/hotel.model");

const hotelRoute = express.Router();

hotelRoute.post("/",async(req,res)=>{
    try {
      const dish = await dishesModel.create(req.body);
      res.send(201).json({msg:dish})
    } catch (error) {
      res.send(404).json("please Check info..")
    }
})

module.exports = hotelRoute;
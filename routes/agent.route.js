const express = require("express");
const agentModel = require("../models/agent.model");


const agentRoute = express.Router();

agentRoute.post("/", async (req, res) => {
  try {
    const agents = await agentModel.create(req.body)
    res.send(201).json({ msg: agents });
  } catch (error) {
    res.send(404).json("please Check info..");
  }
});

module.exports = agentRoute;

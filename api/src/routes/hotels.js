import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  
    const newHotel = new Hotel(req.body);
  
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
  } catch (error) {
    res.status(500).json(error);
  }
});
//UPDATE
router.put("/", (req, res) => {
  res.send("Hello, this is hotels endpoint");
});
//DELETE
router.delete("/", (req, res) => {
  res.send("Hello, this is hotels endpoint");
});
//GET
router.get("/", (req, res) => {
  res.send("Hello, this is hotels endpoint");
});
//GET ALL
router.get("/", (req, res) => {
  res.send("Hello, this is hotels endpoint");
});

export default router;

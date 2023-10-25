import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("🟢 MongoDB connection succesfull");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

app.get("/", (req, res) => {
  res.send("Hello first request");
});

app.listen(process.env.PORT, () => {
  connect();
  console.log(`🟢 Server listening at ${process.env.PORT}`);
});

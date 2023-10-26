import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./src/routes/auth.js";
import usersRoute from "./src/routes/users.js";
import hotelsRoute from "./src/routes/hotels.js";
import roomsRoute from "./src/routes/rooms.js";


dotenv.config();
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB, {});
    console.log("🟢 MongoDB connection succesfull");
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => {
  res.send("Hello first request");
});

//middlewares
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


app.listen(process.env.PORT, () => {
  connect();
  console.log(`🟢 Server listening at ${process.env.PORT}`);
});

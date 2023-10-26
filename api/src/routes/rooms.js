import express from "express";

const router = express.Router();

//CREATE
router.post("/", (req, res) => {
  res.send("Hello, this is rooms endpoint");
});
//UPDATE
router.put("/", (req, res) => {
  res.send("Hello, this is rooms endpoint");
});
//DELETE
router.delete("/", (req, res) => {
  res.send("Hello, this is rooms endpoint");
});
//GET
router.get("/", (req, res) => {
  res.send("Hello, this is rooms endpoint");
});
//GET ALL
router.get("/", (req, res) => {
  res.send("Hello, this is rooms endpoint");
});

export default router;

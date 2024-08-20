const express = require("express");
const router = express.Router();

const Framework = require("../models/Framework");

// Get all frameworks
router.get("/", async (req, res) => {
  try {
    const frameworks = await Framework.find();
    res.json(frameworks);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

// Get a framework by id
router.get("/:id", async (req, res) => {
  try {
    const framework = await Framework.findById(req.params.id);
    res.json(framework);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

// Add a framework
router.post("/", async (req, res) => {
  const framework = new Framework({
    name: req.body.name,
    description: req.body.description,
  });
  try {
    const newFramework = await framework.save();
    res.status(201).json(newFramework);
  } catch (err) {
    res.status(400).json({
      message: "Bad Request",
      error: err.message,
    });
  }
});

// Add a rating to a framework
router.post("/:id/rating", async (req, res) => {
  try {
    const framework = await Framework.findById(req.params.id);
    const rating = {
      user: req.body.user,
      rating: req.body.rating,
      comment: req.body.comment,
    };
    framework.ratings.push(rating);
    await framework.save();
    res.status(201).json(framework);
  } catch (err) {
    res.status(400).json({
      message: "Bad Request",
      error: err.message,
    });
  }
});

module.exports = router;

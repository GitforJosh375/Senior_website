const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");

// Define an in-memory variable to hold the car count (you can persist this in a database if needed)
let carCount = 0;
let currentCommand = { command: "stop" }; // In-memory variable to store the current command

// POST /detection - Endpoint to receive car count from the Python script
router.post("/detection", async (req, res) => {
  const { count } = req.body;

  // Validate the input
  if (typeof count !== 'number') {
    return res.status(400).json({ error: "Invalid count value. It should be a number." });
  }

  try {
    // Update the car count
    carCount = count;

    // Optionally, you can also handle this data to take actions, such as updating LEDs or storing stats.
    return res.json({ message: "Car count updated successfully", carCount: carCount });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// GET /detection - Endpoint to get the current car count (if needed)
router.get("/detection", (req, res) => {
  return res.json({ carCount });
});

// POST /command - Endpoint to set the current command for the Raspberry Pi
router.post("/command", (req, res) => {
  const { command } = req.body;

  // Validate the input
  if (!command || typeof command !== "string") {
    return res.status(400).json({ message: "Invalid command" });
  }

  currentCommand = { command };
  console.log(`Command updated to: ${currentCommand}`);
  return res.json({ message: "Command updated" });
});

// GET /command - Endpoint to get the current command for the Raspberry Pi
router.get("/command", (req, res) => {
  return res.json(currentCommand);
});

module.exports = router;

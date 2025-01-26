const express = require("express");
const cors = require("cors");
const http = require("http"); // Explicitly import http
require("dotenv").config(); // Load environment variables

const app = express();
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || "https://lotview.netlify.app", // Use an environment variable for flexibility
  methods: ["GET", "POST"],
  credentials: true,
};
app.use(cors(corsOptions));

// Import Sequelize models
const db = require("./models");

// Routers
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const imageRouter = require("./routes/Detection");
app.use("/detection", imageRouter);

// Sync database with Sequelize
db.sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Database sync error:", err);
  });

// Set the port dynamically for Render
const PORT = process.env.PORT || 3001; // Render provides the PORT variable
http.createServer(app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

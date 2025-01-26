const express = require("express");
const cors = require("cors");
const http = require("http");
require("dotenv").config();

const app = express();
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || "https://lotview.netlify.app",
  methods: ["GET", "POST"],
  credentials: true,
};
app.use(cors());

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
    // Run the createUser function only once
    createUser();
  })
  .catch((err) => {
    console.error("Database sync error:", err);
  });

// Set the port dynamically for Render
const PORT = process.env.PORT || 3001;
http.createServer(app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Function to create a user only once
async function createUser() {
  try {
    // Check if the user already exists by email or username
    const existingUser = await db.Users.findOne({
      where: { username: "HostCode123" },
    });

    if (!existingUser) {
      // Create the user only if it doesn't exist
      const newUser = await db.Users.create({
        username: "HostCode123",
        password:
          "$2a$10$VuKUPEMtxr/7dSPaONwR0eiia1hkEk0591CYeqJFliaDMdoKkPqAm", // Make sure to hash passwords in production!
      });

      console.log("New user created:", newUser);
    } else {
      console.log("User already exists. Skipping creation.");
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

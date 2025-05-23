const express = require("express");
const fs = require("fs");
const https = require("https");
const http = require("http");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "https://lotview.netlify.app", // Change this to your frontend URL
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions));

const db = require("./models");

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const imageRouter = require("./routes/Detection");
app.use("/detection", imageRouter);

// Set up HTTPS server
const privateKey = fs.readFileSync("lvbackend.shop-key.pem", "utf8");
const certificate = fs.readFileSync("lvbackend.shop-crt.pem", "utf8");
const ca = fs.readFileSync("lvbackend.shop-chain.pem", "utf8");
const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
  passphrase: "parking123",
};

// Use https.createServer instead of app.listen
https.createServer(credentials, app).listen(443, () => {
  console.log("Server is running on HTTPS");
});

db.sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log(err);
  });

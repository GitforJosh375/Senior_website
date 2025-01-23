const express = require("express");
const fs = require("fs");
const https = require("https");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const db = require("./models");

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const imageRouter = require("./routes/Detection");
app.use("/detection", imageRouter);

// Set up HTTPS server
const privateKey = fs.readFileSync("localhost-key.pem", "utf8");
const certificate = fs.readFileSync("localhost.pem", "utf8");
const credentials = { key: privateKey, cert: certificate };

// Use https.createServer instead of app.listen
https.createServer(credentials, app).listen(process.env.PORT, () => {
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

/*db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
/*
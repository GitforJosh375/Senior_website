const bcrypt = require("bcryptjs");

const password = ""; // The password you want to hash
const saltRounds = 10; // The number of rounds to generate the salt (10 is typical)

bcrypt.hash(password, saltRounds)
  .then((hash) => {
    console.log("Hashed password:", hash); // The hashed password will be logged to the console
  })
  .catch((err) => {
    console.error("Error hashing password:", err);
  });
  
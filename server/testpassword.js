const bcrypt = require("bcryptjs");

const password = ""; // Plain text password
const storedHash =
  "$2a$10$IcFtNVzmRBgXQwU76bE5auugbe5Qrlhl/XLFeqXYxR3BI3goh.nBS"; // Example stored hash

// Compare plain text password with the stored hash
bcrypt
  .compare(password, storedHash)
  .then((match) => {
    if (match) {
      console.log("Passwords match!");
    } else {
      console.log("Passwords don't match.");
    }
  })
  .catch((err) => {
    console.error("Error comparing passwords:", err);
  });

const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");

// POST /login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await Users.findOne({ where: { username: username } });

    if (!user) {
      return res.json({ error: "User does not exist" });
    }

    // Compare provided password with the stored hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ error: "Wrong username or password" });
    }

    // Generate JWT token if password matches
    const accessToken = sign(
      { username: user.username, id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    return res.json({
      token: accessToken,
      username: user.username,
      id: user.id,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/auth", validateToken, async (req, res) => {
  res.json(req.user);
});

module.exports = router;

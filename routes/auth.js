const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const users = [];

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email and password are required." });
    }

    if (users.some(user => user.email === email)) {
      return res.status(409).json({ message: "User already exists." });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
      id: users.length + 1,
      name,
      email,
      passwordHash
    };

    users.push(user);

    res.status(201).json({
      message: "User registered successfully.",
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "development_secret",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful.",
      token
    });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;

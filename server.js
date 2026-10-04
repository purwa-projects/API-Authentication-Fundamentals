const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API Authentication Fundamentals API",
    endpoints: {
      register: "POST /api/auth/register",
      login: "POST /api/auth/login",
      profile: "GET /api/protected/profile"
    }
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

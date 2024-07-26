const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3005;

// Middleware
app.use(
  cors({
    origin: ["https://cafe-ms.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://vidyadanedufrall:skilllab@cluster0.msekrrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Member Schema
const memberSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const Member = mongoose.model("Member", memberSchema);

// Registration Route
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    console.log("Received registration request:", { name, email, password });

    // Check if the email already exists
    const existingMember = await Member.findOne({ email });
    if (existingMember)
      return res.status(400).json({ error: "Email already in use" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newMember = new Member({ name, email, password: hashedPassword });
    await newMember.save();
    res.status(201).json({ message: "Member registered successfully" });
  } catch (err) {
    console.error("Error during registration:", err); // Log the full error
    res.status(400).json({ error: "Registration failed" });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const member = await Member.findOne({ email });
    if (!member) return res.status(400).json({ error: "Member not found" });

    const isMatch = await bcrypt.compare(password, member.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: member._id }, "secret_key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

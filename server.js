require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Import the Member model
// const Member = require("./models/Member");

// Import the member routes
const memberRoutes = require("./routes/memberRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Use member routes for all "/api/members" requests
app.use("/api/members", memberRoutes);

// Example route to get all members
// app.get("/api/members", async (req, res) => {
//   try {
//     const members = await Member.find();
//     res.status(200).json(members);
//   } catch (err) {
//     res.status(500).send("Error fetching members: " + err.message);
//   }
// });

// Example route to create a new member
// app.post("/api/members", async (req, res) => {
//   const { fullName, email, dateOfBirth, dateOfEncounter } = req.body;

//   try {
//     const newMember = new Member({ fullName, email, dateOfBirth, dateOfEncounter });
//     await newMember.save();
//     res.status(201).send("Member created successfully");
//   } catch (err) {
//     res.status(500).send("Error creating member: " + err.message);
//   }
// });

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

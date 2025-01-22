const express = require("express");
const Member = require("../models/Member"); // Import the Member model
const router = express.Router();

// Create a new member
router.post("/", async (req, res) => {
  const {
    fullName,
    contactInfo,
    dateOfBirth,
    membershipStatus,
    dateOfEncounter,
    equippingClass,
    weeklyActivities,
    tithesAndOfferings,
    pledgeGiven,
    significantLifeEvents,
    lifeChanges,
    communicationLog,
  } = req.body;

  try {
    const newMember = new Member({
      fullName,
      contactInfo,
      dateOfBirth,
      membershipStatus,
      dateOfEncounter,
      equippingClass,
      weeklyActivities,
      tithesAndOfferings,
      pledgeGiven,
      significantLifeEvents,
      lifeChanges,
      communicationLog,
    });

    await newMember.save();
    res.status(201).json({ message: "Member created successfully", newMember });
  } catch (err) {
    res.status(500).json({ message: "Error creating member", error: err.message });
  }
});

// Get all members
router.get("/", async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ message: "Error fetching members", error: err.message });
  }
});

// Get a single member by ID
router.get("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.status(200).json(member);
  } catch (err) {
    res.status(500).json({ message: "Error fetching member", error: err.message });
  }
});

// Update a member by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated member
    );
    if (!updatedMember) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.status(200).json({ message: "Member updated successfully", updatedMember });
  } catch (err) {
    res.status(500).json({ message: "Error updating member", error: err.message });
  }
});

// Delete a member by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);
    if (!deletedMember) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting member", error: err.message });
  }
});

// Update communication log for a member
router.put("/:id/communication", async (req, res) => {
  const { message, task } = req.body;
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    // Add new communication log entry
    member.communicationLog.push({ message, task, date: Date.now() });
    await member.save();
    res.status(200).json({ message: "Communication log updated successfully", member });
  } catch (err) {
    res.status(500).json({ message: "Error updating communication log", error: err.message });
  }
});

module.exports = router;

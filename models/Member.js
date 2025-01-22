// Church Member Model
//This model stores basic member information, discipleship (equipping) class details, weekly attendance, and life events.

const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  contactInfo: {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: String,
    address: String,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  membershipStatus: {
    type: String,
    enum: ["Active", "Inactive", "Pending"],
    required: true,
  },
  dateOfEncounter: {
    type: Date,
    required: true, // Date of their first encounter with the church
  },
  equippingClass: {
    name: {
      type: String,
      enum: ["Post Encounter", "LWAP", "Undercover", "SOL1"],
    },
    startDate: Date,
    endDate: Date,
    status: {
      type: String,
      enum: ["Ongoing", "Completed"],
    },
  },
  weeklyActivities: {
    church: {
      type: Boolean,
      default: false, // Attended church this week
    },
    cellGroup: {
      type: Boolean,
      default: false, // Attended cell group this week
    },
    devotionCompletion: {
      type: Boolean,
      default: false, // Did they complete their devotion?
    },
    equippingAttended: {
      type: Boolean,
      default: false, // Did they attend equipping this week?
    },
  },
  tithesAndOfferings: [{
    amount: Number,
    date: Date,
  }],
  pledgeGiven: [{
    amount: Number,
    date: Date,
  }],
  significantLifeEvents: [{
    eventType: {
      type: String,
      enum: ["Birthday", "Anniversary", "Graduation", "Milestone", "Life Change"],
    },
    description: String, // Specific details about the event
    eventDate: Date, // Date of event
  }],
  lifeChanges: [{
    changeType: {
      type: String,
      enum: ["First Cell Group", "First Public Speaking", "First Job", "Loss of Loved One"],
    },
    description: String, // Description of the life change
    date: Date, // Date of life change
  }],
  communicationLog: [{
    message: String, // Chat or message that was communicated
    task: String, // Task assigned to the member
    date: Date, // Date of communication
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;

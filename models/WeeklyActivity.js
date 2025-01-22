// Weekly Activity Tracking:
// This tracks whether the member attended church, cell group, or completed their devotion and equipping class in a given week. It’s important for monitoring spiritual and attendance growth.

const weeklyActivitySchema = new mongoose.Schema({
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    weekStartDate: {
      type: Date,
      required: true,
    },
    churchAttendance: {
      type: Boolean,
      default: false,
    },
    cellGroupAttendance: {
      type: Boolean,
      default: false,
    },
    devotionCompleted: {
      type: Boolean,
      default: false,
    },
    equippingClassAttended: {
      type: Boolean,
      default: false,
    },
    tithesGiven: {
      amount: {
        type: Number,
        default: 0,
      },
      date: Date,
    },
    pledgeGiven: {
      amount: {
        type: Number,
        default: 0,
      },
      date: Date,
    },
  });
  
  const WeeklyActivity = mongoose.model("WeeklyActivity", weeklyActivitySchema);
  
  module.exports = WeeklyActivity;
  
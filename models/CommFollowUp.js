// Communication Log Model
// This will allow you to log communication with members (such as messages or tasks that need follow-up).

const communicationLogSchema = new mongoose.Schema({
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    message: String, // Message sent to the member
    task: String, // Task assigned to the member (e.g., "Complete devotion", "Follow-up on attendance")
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
  const CommunicationLog = mongoose.model("CommunicationLog", communicationLogSchema);
  
  module.exports = CommunicationLog;
  
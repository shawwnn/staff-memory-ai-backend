// Significant Life Events Model:
// This will allow tracking of major life milestones or changes in a member's life that the church should be aware of.

const lifeEventSchema = new mongoose.Schema({
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    eventType: {
      type: String,
      enum: ["Birthday", "Anniversary", "Graduation", "Milestone", "Life Change"],
    },
    description: String,
    eventDate: Date,
  });
  
  const LifeEvent = mongoose.model("LifeEvent", lifeEventSchema);
  
  module.exports = LifeEvent;
  
import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    feedback: {
      type: String,
      required: true,
    },
    rating: {
      type:String
    },
    feedbackOf: {
      type: String
    },
    feedbackBy: {
        type: String,
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    replyOf: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", FeedbackSchema);
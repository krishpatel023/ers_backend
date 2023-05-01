import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    feedback: {
      type: String,
      required: true,
    },
    rating: {
      type:String,
      required: true
    },
    feedbackOf: {
      type: String,
      required: true,
    },
    feedbackBy: {
        type: String,
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", FeedbackSchema);
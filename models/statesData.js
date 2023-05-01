import mongoose from "mongoose";

const StateSchema = new mongoose.Schema(
  {
    data:[]
  },
  { timestamps: true }
);

export default mongoose.model("States", StateSchema);
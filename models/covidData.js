import mongoose from "mongoose";

const CovidSchema = new mongoose.Schema(
  {
    confirmed:{
        type: Number
    },
    recovered:{
        type: Number
    },
    deaths:{
        type: Number
    },
    active:{
        type: Number
    },
    statewise: []
  },
  { timestamps: true }
);

export default mongoose.model("Covid", CovidSchema);
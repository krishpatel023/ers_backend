import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address:{
      type:String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required:true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // category: {
    //   type:String,
    //   required:true,
    // },
    materials: [

    ],
    ratings: {
        type: Number,
        required: true
    },
    img: {
      type:String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Hospital", HospitalSchema);
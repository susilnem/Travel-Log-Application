import mongoose from "mongoose";
const Schema = mongoose.Schema;

const LogSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 3,
      max: 60,
    },
    description: {
      type: String,
      required: true,
      min: 3,
    },
    image: {
      type: String,
      allowNull: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("logModel", LogSchema);

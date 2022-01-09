import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    default: "Indonesia",
  },
  city: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
  },
  description: {
    type: String,
    required: true,
  },
  categoryId: {
    type: ObjectId,
    ref: "Category",
  },
  imageId: [
    {
      type: ObjectId,
      ref: "Image",
    },
  ],
  featureId: [
    {
      type: ObjectId,
      ref: "Feature",
    },
  ],
  activityId: [
    {
      type: ObjectId,
      ref: "Activity",
    },
  ],
});

module.exports = mongoose.model("Item", itemSchema);

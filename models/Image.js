import mongoose from "mongoose";
const { Schema } = mongoose;

const imageSchema = new Schema({
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Image", imageSchema);

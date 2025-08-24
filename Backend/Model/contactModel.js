import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const contactModel = mongoose.Model("contact",contactSchema)

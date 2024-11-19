import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});


const requestSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "accepted", "rejected"],
  },
  bio: { type: String },
  hospital: { type: String },
  fees: { type: String },
  gender: { type: String, enum: ["male", "female", "other"] }, // Optional: Enum for gender
  appointmentTime: { type: String }, // Consider using Date type for time handling
  degree: { type: String },
  specialization: { type: String },
  experience: { type: String },
  number: { type: String },
  address: { type: String },
});

// Register the Request Model
export const RequestModal =
  mongoose.models.Requests || mongoose.model("Requests", requestSchema);

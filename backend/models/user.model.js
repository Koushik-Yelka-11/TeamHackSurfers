import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  assistantName: { type: String },
  assistantImage: { type: String },
  history: [
    {
      role: {
        type: String,
        enum: ['user', 'model'],
        required: true
      },
      parts: {
        type: String,
        required: true
      }
    }
  ]
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
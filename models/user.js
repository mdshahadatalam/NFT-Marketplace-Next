import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema(
    {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    },
    {timestamps:true }
);

const User = model.User || mongoose.model("User",userSchema);
export default User;
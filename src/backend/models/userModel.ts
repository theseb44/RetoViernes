import mongoose, { model } from "mongoose";
import type { User } from "../interfaces/User";


const UserSchema = new mongoose.Schema<User>(
  {
    name: {
      required: true,
      type: String,
    },
    lastname: {
      type: String,
      required: true,
    },
    cel: {
      type: Number,
      required: true,
    },
  },
);

const UserModel = model<User>("users", UserSchema);
export default UserModel;
import mongoose from "mongoose";
import validator from 'validator'

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true,"username must be unique"]
    },
    password: {
      type: String,
      required: [true,"Password is required"],
      validate:[validator.isStrongPassword,"Password must be at least 8 characters long with at least 1 Uppercase character and a symbol"]
    },
    firstName: {
      type: String,
      required: [true,"firstName is required"],
    },
    lastName: {
      type: String,
      required: [true,"lastName is required"],
    },
    email: {
      type: String,
      required: [true,"Email is required"],
      validate: [validator.isEmail,"Please enter a valid email"]
    },
    address: {
      type: String,
      required: [true,"Password is required"],
      minlength:[3,"Length must be at least 3 letters"]
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

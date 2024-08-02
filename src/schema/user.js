import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel, UserSchema };

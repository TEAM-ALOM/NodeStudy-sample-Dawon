import { UserModel } from "../schema/user.js";

export class UserService {
  async post(data) {
    try {
      const user = await UserModel.create(data);
      return user;
    } catch (err) {
      throw err;
    }
  }

  async get(userId) {
    const user = await UserModel.findOne({ id: userId });
    return user;
  }

  async patch(userId, data) {
    try {
      const user = await UserModel.updateOne({ id: userId }, data);
      return user;
    } catch (err) {
      throw err;
    }
  }

  async delete(userId) {
    try {
      const user = await UserModel.deleteOne({ id: userId });
      return user;
    } catch (err) {
      throw err;
    }
  }
}

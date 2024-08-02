import { UserModel } from "../schema/user";
import { UserType } from "../types/user.type";

export class UserService {
  async post(data: { id: string; password: string }): Promise<UserType> {
    try {
      const user = await UserModel.create(data);
      return user as UserType;
    } catch (err) {
      throw err;
    }
  }
}

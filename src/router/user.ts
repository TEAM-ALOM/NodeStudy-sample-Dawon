import { Router } from "express";
import { UserService } from "../service/user.ts";
import { ResponseType } from "../types/response.type.ts";
import { UserSchema } from "../schema/user.js";
import { UserType } from "../types/user.type.js";

const UserRouter = Router();
const userservice: UserService = new UserService();

UserRouter.post("/", async (req, res) => {
  const { body } = req;
  const user = await userservice.post(body);

  const result: ResponseType<UserType> = {
    message: "성공적으로 생성되었습니다.",
    data: user,
  };

  res.json(result);
});

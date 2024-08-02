import { Router } from "express";
import { UserService } from "../service/user.js";
import jwt from "jsonwebtoken";

const AuthRouter = Router();

const userservice = new UserService();

AuthRouter.post("/login", async (req, res) => {
  const { body } = req;
  const user = await userservice.get(body.id);
  if (!user) {
    return res.send("사용자를 찾을 수 없습니다.");
  }
  if (user.password !== body.password) {
    return res.send("비밀번호가 틀립니다.");
  }
  const token = jwt.sign(
    {
      type: "JWT",
      id: user.id,
    },
    "1234qwer",
    {
      expiresIn: "30m",
      issuer: "Arom",
    }
  );

  const result = {
    message: "로그인에 성공하였습니다.",
    data: token
  }

  return res.send(result);
});

export default AuthRouter;

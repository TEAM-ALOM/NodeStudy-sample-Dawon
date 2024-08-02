import express from "express";
import AuthRouter from "./router/auth.js";
import dotenv from "dotenv";
import UserRouter from "./router/user.js";
import mongoose from "mongoose";
import { swaggerOptions } from "./swagger/config.js";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app = new express();

const port = process.env.PORT;

mongoose.connect(process.env.DB_URI);

app.use(express.json());

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/auth", AuthRouter);
app.use("/user", UserRouter);

app.listen(port, () => {
  console.log("listen at: ", port);
});

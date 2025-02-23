import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export const userRouter = express.Router();

const idGenerator = new IdGenerator();
const hashManager = new HashManager();
const authenticator = new Authenticator();

const userDatabase = new UserDatabase();
const userBusiness = new UserBusiness(userDatabase,idGenerator, hashManager, authenticator);
const userController = new UserController(userBusiness);

userRouter.post("/singup", (res, req) => userController.singUp(res,req));
userRouter.post("/login", (res, req) => userController.login(res,req));
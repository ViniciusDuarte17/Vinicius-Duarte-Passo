import express from "express";
import { ClientBusiness } from "../business/ClientBusiness";
import { ClientController } from "../controller/ClientController";
import { ClientDatabase } from "../data/ClientDatabase";
import { IdGenerator } from "../services/IdGenerator";


export const clientRouter = express.Router();

const idGenerator = new IdGenerator();

const clientDatabase = new ClientDatabase();
const clientBusiness = new ClientBusiness(clientDatabase, idGenerator);
const clientController = new ClientController(clientBusiness);

clientRouter.post("/", (res, req) => clientController.createClient(res,req));
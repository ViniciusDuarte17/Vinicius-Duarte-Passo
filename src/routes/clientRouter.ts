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
clientRouter.get("/", (res, req) => clientController.getClient(res,req));
clientRouter.get("/:id", (res, req) => clientController.getClientById(res,req));
clientRouter.patch("/:id", (res, req) => clientController.uptadeClient(res,req));
clientRouter.delete("/:id", (res, req) => clientController.deleteClient(res,req));
import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness";
import { IClientDTO } from "../model/client";



export class ClientController {
    constructor(private clientBusiness: ClientBusiness) { }

    async createClient(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, phone, address, cpf } = req.body;

            const clientInput: IClientDTO = {
                name,
                email,
                phone,
                address,
                cpf
            }
            await this.clientBusiness.createClient(clientInput);

            res.status(201).send({ message: "cliente registrado com sucesso!" })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async getClient(req: Request, res: Response) {
        try {
            const client = await this.clientBusiness.getClient();

            res.status(200).send(client);
        } catch (error: any) {
            res.status(error.code).send({ error: error.message });
        }
    }

    async uptadeClient(req: Request, res: Response) {
        try {
            const { name, email, phone, address, cpf} = req.body;
            const id = req.params.id;

            const client: IClientDTO = {
                name,
                email,
                phone,
                address,
                cpf
            }
            await this.clientBusiness.updateClient(id, client)
            
            res.status(200).send({message: 'cliente atualizado com sucesso!'})
        } catch (error: any) {
            res.status(error.code).send({ error: error.message });
        }
    }

    async deleteClient(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id

            await this.clientBusiness.deleteClient(id);

            res.status(200).send({message: "cliente deletado"})
        } catch (error: any) {
            res.status(error.code).send({ error: error.message });
        }
    }
}
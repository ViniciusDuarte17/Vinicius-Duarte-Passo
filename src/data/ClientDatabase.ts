import { Client, IClient, IClientDTO } from "../model/client";
import { IClientRepository } from "../repository/IClientRepository";
import { BaseDatabase } from "./BaseDatabase";




export class ClientDatabase extends BaseDatabase implements IClientRepository {

    public async createClient(client: IClient): Promise<void> {
        try {
            this.getConnection()
            await Client.create(client)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getClient(): Promise<IClient[]> {
        this.getConnection()
        const client: IClient[] = await Client.find();
        return client 
    }

    public async getClientById(id: string): Promise<IClient> {
        this.getConnection()
        const client = await Client.findOne({id: id})
        return client;
    }

    public async updateClient(id: string, client: IClientDTO): Promise<void> {
        this.getConnection()
        await Client.updateOne({id: id}, client)
    }

    public async deleteClient(id: string): Promise<void> {
        this.getConnection()
        await Client.deleteOne({id: id})
    }
}
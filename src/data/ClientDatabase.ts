import { Client, IClient } from "../model/client";
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

}
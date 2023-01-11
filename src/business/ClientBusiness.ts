import { BaseError } from "../error/BaseError";
import { IClient, IClientDTO } from "../model/client";
import { IIDGenerator } from "../ports/Ports";
import { IClientRepository } from "../repository/IClientRepository";


export class ClientBusiness {
    constructor(
        private clientDabase: IClientRepository,
        private idGenerator: IIDGenerator
    ) { }

    public async createClient(clientInput: IClientDTO): Promise<void> {
        const { name, email, phone, address, cpf } = clientInput;

        if (!name || !email || !phone || !address || !cpf) {
            throw new BaseError("É necessário preencher todos os compos", 422);
        }

        const id = this.idGenerator.generate()

        const client: IClient = {
            id,
            name,
            email,
            phone,
            address,
            cpf
        }

        await this.clientDabase.createClient(client)
    }

    public async getClient() {

        const client = await this.clientDabase.getClient()

        if(client.length < 0) {
            throw new BaseError("Não tem cliente cadastro", 404)
        }

        return client;
    }
}
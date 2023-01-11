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

        if(client.length <= 0) {
            throw new BaseError("Não tem cliente cadastrado", 404)
        }

        return client;
    }

    public async updateClient(id: string, client: IClientDTO): Promise<void> {
        const {name, email, phone, address, cpf} = client;

        if(!id) {
            throw new BaseError("É necessário passar id no parms da requisição", 422)
        }

        if (
            name === '' ||
            email === '' ||
            phone === undefined ||
            address === '' ||
            cpf === ''
        ) {
            throw new BaseError("Nenhum dos campos devem estar em branco.", 422);
        }

        if (!name && !email && phone && !address && !cpf) {
            throw new BaseError("Escolha ao menos um valor para editar!", 422);
        }
        
        await this.clientDabase.updateClient(id, client)
    }

    public async deleteClient(id: string): Promise<void> {

        if(!id) {
            throw new BaseError("É necessário passar id no parms da requisição", 422)
        }

        const client = await this.clientDabase.getClientById(id);

        if(!client) {
            throw new BaseError("cliente não encontrado", 404);
        }

        await this.clientDabase.deleteClient(id)
    }
}
import { IClient, IClientDTO } from "../../../src/model/client";
import { IClientRepository } from "../../../src/repository/IClientRepository";



export class ClientDatabaseMock implements IClientRepository {
    createClient(client: IClient): Promise<any > {
        throw new Error("Method not implemented.");
    }
    getClient(): Promise<IClient[]> {
        const client: IClient[] = [{
            id: "idteste",
            name: "test",
            email: "test@gmail.com",
            phone: 0,
            address: "addressteste",
            cpf: "cpfteste"
        }]
       return client as any
    }
    getClientById(id: string): Promise<IClient> {
        const client: IClient = {
            id: "",
            name: "",
            email: "",
            phone: 0,
            address: "",
            cpf: ""
        }
        
        return client as any
    }
    updateClient(id: string, client: IClientDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteClient(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
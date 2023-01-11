import { IClient, IClientDTO } from "../model/client";


export interface IClientRepository {
    createClient(client: IClient): Promise<void>
    getClient(): Promise<IClient[]>
    updateClient(id: string, client: IClientDTO): Promise<void>
}
import { IClient } from "../model/client";


export interface IClientRepository {
    createClient(client: IClient): Promise<void>
}
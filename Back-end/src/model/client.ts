import mongoose from 'mongoose';


export interface IClient {
    id: string;
    name: string;
    email: string;
    phone: number,
    address: string,
    cpf: string
}

export interface IClientDTO {
    name: string;
    email: string;
    phone: number,
    address: string,
    cpf: string
}

export const Client = mongoose.model<IClient | any> ('client', {
    id: String,
    name: String,
    email: String,
    phone: Number,
    address: String,
    cpf: String
})
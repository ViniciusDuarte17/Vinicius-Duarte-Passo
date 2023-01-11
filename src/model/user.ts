import mongoose from 'mongoose';

export interface User {
    id: string;
    name: string;
    email: string;
    password : string
}

export interface InputDTO {
    name: string;
    email: string;
    password: string
}

export interface userLogin {
    name: string;
    password: string
}

export const Users = mongoose.model<User | any> ('user', {
    id: String,
    name: String,
    email: String,
    password: String
})
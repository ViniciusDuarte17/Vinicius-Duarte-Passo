import { User } from "../model/user";


export interface IUserRepository {
    signUp(user: User): Promise<void>
}
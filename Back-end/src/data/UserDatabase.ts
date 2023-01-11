import { User, Users } from "../model/user";
import { IUserRepository } from "../repository/IUserRepository";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase implements IUserRepository {

    public async signUp(user: User): Promise<void> {
        try {
            this.getConnection()
            await Users.create(user)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getUserByname(userName: string): Promise<User> {
        try {
            this.getConnection()
            const user = await Users.findOne({ name: userName })
            return user as User
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
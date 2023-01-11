import { BaseError } from "../error/BaseError";
import { InputDTO, User } from "../model/user";
import { IAuthenticator, IHashManger, IIDGenerator } from "../ports/Ports";
import { IUserRepository } from "../repository/IUserRepository";


export class UserBusiness {
    constructor(
        private userDatabase: IUserRepository,
        private idGenerator: IIDGenerator,
        private hashManager : IHashManger,
        private authenticator: IAuthenticator
        ) { }

        async signUp(user: InputDTO): Promise<string> {

            const id = this.idGenerator.generate();
            const hashPassowd =  await this.hashManager.hash(user.password);

            if(!user.name || !user.email || !user.password) {
                throw new BaseError("É necessário preencher todos os compos", 422);
            }

            const userValue: User = {
                id,
                name: user.name,
                email: user.email,
                password: hashPassowd
            }
          
           await this.userDatabase.signUp(userValue)

           const accessToken = this.authenticator.generateToken({id})

           return accessToken;
        }
}
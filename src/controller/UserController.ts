import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { InputDTO } from "../model/user";


export class UserController {
    constructor(private userBusiness: UserBusiness) { }

    async singUp(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password } = req.body
            const userInput: InputDTO = {
                name,
                email,
                password
            }

            const token = await this.userBusiness.signUp(userInput)
            res.status(201).send({token: token})

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}
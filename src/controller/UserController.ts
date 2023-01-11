import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { InputDTO, userLogin } from "../model/user";


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
            res.status(201).send({ token: token })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { name, password } = req.body;

            const userLogin: userLogin = {
                name,
                password
            }
            const token = await this.userBusiness.getUserByname(userLogin)

            res.status(200).send({ token: token })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}
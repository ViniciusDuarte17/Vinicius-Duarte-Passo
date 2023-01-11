import { ClientBusiness } from "../../src/business/ClientBusiness";
import { IClientDTO } from "../../src/model/client";
import { IdGenerator } from "../../src/services/IdGenerator";
import { ClientDatabaseMock } from "./mocks/ClientDatabaseMock";



const clientDatabaseMock = new ClientDatabaseMock()
const idGenerator = new IdGenerator();
const clientBusiness = new ClientBusiness(clientDatabaseMock, idGenerator)

describe("testando o métado createClient da business", () => {
    test("1. Caso de error: Deixando o campo phone sem o número", async () => {

        try {
            expect.assertions(3);

            const clientMock: IClientDTO = {
                name: "nameMock",
                email: "email@mock.com",
                phone: 0,
                address: "5454512121",
                cpf: "124545465"
            }
            await clientBusiness.createClient(clientMock)
        } catch (error: any) {
            expect(error).toBeDefined();
            expect(error.message).toBe("É necessário preencher todos os compos");
            expect(error.code).toBe(422);
        }
    })

    test("2. Caso de error: Deixando algum campo vazio", async () => {

        try {
            expect.assertions(3);

            const clientMock: IClientDTO = {
                name: "",
                email: "email@mock.com",
                phone: 74998054530,
                address: "5454512121",
                cpf: "124545465"
            }
            await clientBusiness.createClient(clientMock)
        } catch (error: any) {
            expect(error).toBeDefined();
            expect(error.message).toBe("É necessário preencher todos os compos");
            expect(error.code).toBe(422);
        }
    })
    
})
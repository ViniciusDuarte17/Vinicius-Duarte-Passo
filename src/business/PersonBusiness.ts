import { BaseError } from "../error/BaseError";
import { PersonTtype } from "../model/person";
import { IPersonRepository } from "../repository/personRepository";


export class PersonBusiness {
    constructor(private userDatabase: IPersonRepository) { }

    async createPerson(Person: PersonTtype) {

        try {
            const { name, salary, approved } = Person;

            if (!name || !salary || !approved) {
                throw new BaseError("É necessário preencher todos os campos", 422)
            }

            await this.userDatabase.creatPerson(Person)

        } catch (error: any) {
            throw new BaseError(error, 400)
        }
    }

    async getPeople(): Promise<PersonTtype[] | undefined> {
        try {
            const people = this.userDatabase.getPerson()

            if (people === undefined) {
                throw new BaseError("Não encontramos usuários no nosso sistema", 404)
            }

            return people;

        } catch (error: any) {
            new BaseError(error, error.statusCode)
        }
    }

    async getPeopleById(id: string) {
        try {
            if (!id) {
                throw new BaseError("É necessário passar o id no hearde authorization", 422)
            }

            const people = await this.userDatabase.getPersonById(id)

            if (!people) {
                throw new BaseError("Não encontramos esse usuário em nosso sistema", 402);
            }

            return people;

        } catch (error: any) {
            return new BaseError(error.message, error.code)
        }
    }

    async updatePerson(id: string, person: any): Promise<void> {

        if (!id) {
            throw new BaseError("É necessário passar id do usuário", 422)
        }
        await this.userDatabase.updatePerson(id, person)
    }
    async deletePerson(id: string): Promise<void> {
       
        if (!id) {
            throw new BaseError("É necessário passar id do usuário", 422)
        }

        await this.userDatabase.deletePerson(id)
    }
}
import mongoose from 'mongoose';


export abstract class BaseDatabase {

    protected getConnection() {
       
        mongoose
        .connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apicluster.77vkhdq.mongodb.net/?retryWrites=true&w=majority`,
          ).then( () => {
            console.log('conctou com sucesso no mongDb')
          })
          .catch(() => {
            console.log('Erro na connect mongoDb')
          })
    }
}
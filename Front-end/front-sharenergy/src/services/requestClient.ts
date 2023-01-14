import axios from "axios"
import { IClient } from "../@types/User"


export const requestClient = (setClient: React.Dispatch<React.SetStateAction<IClient[]>>) => {

  axios
    .get(`http://localhost:3000/client`)
    .then((res) => {
      setClient(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const requestDeleteClient = (id: string, setClientDelete: React.Dispatch<React.SetStateAction<undefined>>) => {
  axios
    .delete(`http://localhost:3000/client/${id}`)
    .then((res) => {
      setClientDelete(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}
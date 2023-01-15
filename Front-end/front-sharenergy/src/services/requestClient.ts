import axios from "axios"
import { IClient } from "../@types/User"


export const requestClient = (
  setClient: React.Dispatch<React.SetStateAction<IClient[]>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {

  axios
    .get(`http://localhost:3000/client`)
    .then((res) => {
      setClient(res.data)
    })
    .catch((err) => {
      setErrorMessage(err.response.data.error)
    })
}

export const requestAddClient = (
  body: IClient,
  setMessageAddClient: React.Dispatch<React.SetStateAction<string>>,
  setErrorCreateClient: React.Dispatch<React.SetStateAction<string>>,
  clean: () => void
) => {

  axios
    .post(`http://localhost:3000/client`, body)
    .then((res) => {
      setMessageAddClient(res.data.message)
      clean
    })
    .catch((err) => {
      setErrorCreateClient(err.data.message)
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
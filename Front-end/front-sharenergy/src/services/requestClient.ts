import axios from "axios"
import { IClient } from "../@types/User"


export const requestClient = (
  setClient: React.Dispatch<React.SetStateAction<IClient[]>>,
  setClientDelete: React.Dispatch<React.SetStateAction<undefined>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {

  axios
    .get(`http://localhost:3000/client`)
    .then((res) => {
      setClient(res.data)
      setClientDelete(res.data)
    })
    .catch((err) => {
      setErrorMessage(err.response.data.error)
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
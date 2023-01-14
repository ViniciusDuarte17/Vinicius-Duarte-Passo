import axios from "axios"
import { IClient } from "../@types/User"

interface Props {
    setClient:React.Dispatch<React.SetStateAction<IClient[]>>
}

export const requestClient = (setClient: React.Dispatch<React.SetStateAction<IClient[]>>) => {

   axios
   .get( `http://localhost:3000/client`)
   .then( (res) => {
     setClient(res.data)
   })
   .catch( (err) => {
    console.log(err)
   })
}
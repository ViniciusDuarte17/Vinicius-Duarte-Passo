import axios from "axios"
import { User } from "../@types/User"



export const registerLogin = (body: User, setIsLoading : React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsLoading(true)
    axios
        .post(`http://localhost:3000/user/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            window.location.reload()
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsLoading(true)
        })
}
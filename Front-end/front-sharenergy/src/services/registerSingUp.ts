import axios from "axios"
import { User } from "../@types/User"


export const registerSingUp = (body: User) => {

    axios
        .post(`http://localhost:3000/user/singup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
}
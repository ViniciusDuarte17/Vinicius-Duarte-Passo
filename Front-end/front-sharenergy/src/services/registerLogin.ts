import axios from "axios"
import { User } from "../@types/User"



export const registerLogin = (body: User) => {

    axios
        .post(`http://localhost:3000/user/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
}
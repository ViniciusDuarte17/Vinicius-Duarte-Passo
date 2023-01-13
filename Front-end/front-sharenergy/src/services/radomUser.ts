import axios from "axios"



export const radomUser = (numberPage: number, setUser: React.Dispatch<React.SetStateAction<any[]>>) => {
    axios
    .get(`https://randomuser.me/api/?results=${numberPage}`)
    .then( (res) => {
        setUser(res.data.results)
    })
    .catch( (error) => {
       alert(error)
    })
}
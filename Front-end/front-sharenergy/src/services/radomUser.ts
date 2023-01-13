import axios from "axios"



export const radomUser = (numberPage: number, setUser: React.Dispatch<React.SetStateAction<never[]>>, setError:React.Dispatch<React.SetStateAction<string>>) => {
    axios
    .get(`https://randomuser.me/api/?results=${numberPage}`)
    .then( (res) => {
        setUser(res.data.results)
    })
    .catch( (error) => {
       setError(error)
       alert(error)
    })
}
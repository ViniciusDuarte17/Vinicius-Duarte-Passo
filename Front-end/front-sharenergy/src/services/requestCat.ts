import axios from "axios"


export const requestCat = (status: number, setCat: any) => {
    axios
    .get(`https://http.cat/100`)
    .then( (res) => {
        setCat({message: 'bora vini'})
    })
    .catch( (error) => {
        console.log(error.message)
    })
}
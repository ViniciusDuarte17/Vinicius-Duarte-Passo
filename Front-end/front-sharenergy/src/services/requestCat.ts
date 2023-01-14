import axios from "axios"


export const requestCat = (status: number) => {
    axios
    .get(`https://http.cat/100`)
    .then( (res) => {
        console.log(JSON.stringify(res.data))
    })
    .catch( (error) => {
        console.log(error.message)
    })
}
import axios from "axios"


export const requestDog = (setDog: React.Dispatch<React.SetStateAction<{}>>) => {

   axios
   .get(`https://random.dog/woof.json`)
   .then( (res) => {
    setDog(res.data)
   })
   .catch( (error) => {
        console.log(error)
   })
}
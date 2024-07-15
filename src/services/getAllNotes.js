import axios from "axios"
export const getAllNotes = () => {
    return axios.get("http://localhost:3002/notes")
        .then((response) => {
            const { data } = response
            console.log(data)
            return data
        })
}
//https://floating-mountain-93526-790e4950c4d4.herokuapp.com/notes
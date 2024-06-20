import axios from "axios"
export const getAllNotes = () => {
    return axios.get("http://localhost:3002/notes")
        .then((response) => {
            const { data } = response
            console.log(data)
            return data
        })
}
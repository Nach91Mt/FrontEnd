import axios from "axios";

export const createNote = ({ title, body, userId }) => {
    return axios.post("http://localhost:3002/notes/post", { title, body, userId })
        .then(response => {
            const { data } = response
            return data
        })

}
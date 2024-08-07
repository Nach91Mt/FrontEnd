import axios from "axios";
let token = null
const setToken = newToken => {
    token = 'Bearer ' + newToken
}
const createNote = (newObject) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const request = axios.post("http://localhost:3002/notes/postear", newObject, config)
    return request.then(response => response.data)

}
export default { createNote, setToken }
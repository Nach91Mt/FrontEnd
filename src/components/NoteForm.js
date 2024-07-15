import { useState } from "react"
import Togglabe from "./Togglabe"
export default function NoteForm({ addNote, handleLogout }) {
    const [newNote, setNewNote] = useState('')
    const handleChange = (event) => {
        setNewNote(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() > 0.5,
        }
        addNote(noteObject)
        setNewNote('')
    }
    return (
        <>
            <Togglabe buttonLabel={'New Note'}><form onSubmit={handleSubmit}>
                <input type='text' placeholder='Text' onChange={handleChange} value={newNote} />
                <button type="submit">Agregar Nota</button>
            </form>
            </Togglabe>
            <div>
                <button onClick={handleLogout}>Cerrar sesion</button>
            </div>
        </>
    )
}
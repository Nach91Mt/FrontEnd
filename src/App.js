
import { Note } from './Note.js'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { getAllNotes } from './services/notes/getAllNotes.js';
import { createNote } from './services/notes/craeteNote.js';

function App() {
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(false)
  const [newNote, setNewNote] = useState('')
  const [newTitle, setNewTitle] = useState('');
  const [error, setError] = useState('')
  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };
  const handleChange = (event) => {
    setNewNote(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    const noteAdd = {

      title: newTitle,
      body: newNote,
      userId: 1
    }
    createNote(noteAdd)
      .then((newNote) => {
        setNote(prevNote => prevNote.concat(newNote))
      })
      .catch((error) => (
        console.error(error),
        setError('la api ha petado')
      ))
    setNewTitle('')
    setNewNote('')
    //setNote([...note, noteAdd])

  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getAllNotes()
        .then(notes => {
          setNote(notes);
          setLoading(false);
        })
      /*fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {setNote(json)})*/
    }, 2000)
  }, []) // con esto se ejecuta solo 1 vez
  return (
    <div className="App">
      <strong>{loading ? "Cargando..." : ""}

      </strong>
      <Note notes={note} />
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Title' onChange={handleTitleChange} value={newTitle} />
        <input type='text' onChange={handleChange} value={newNote} />
        <button type="submit">Agregar Nota</button>
      </form>
      {error ? error : ''}
    </div>
  );
}

export default App;

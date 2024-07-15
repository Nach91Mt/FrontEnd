
import { Note } from './Note.js'
import { useState, useEffect } from 'react';
import { getAllNotes } from './services/getAllNotes.js';
import createNote from './services/craeteNote.js';
import loginServices from './services/login.js'
import NoteForm from './components/NoteForm.js';
import UserForm from './components/Userform.js';
function App() {
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)


  const handleLogout = () => {
    setUser('')
    createNote.setToken(user.token)
    window.localStorage.removeItem('loggerNoteAppUser')
    // setUsername('')
  }
  const LoginSubmit = async ({ username, password }) => {
    console.log(username)
    try {
      const user = await loginServices.login({
        username,
        password
      })
      console.log(user)
      createNote.setToken(user.token)

      window.localStorage.setItem(
        'loggerNoteAppUser', JSON.stringify(user)
      )

      setUser(user)

    } catch (e) {
      // setUsername(e)
      // setTimeout(() => {
      //   setUsername('')
      // }, 5000);
    }

  }



  const addNote = (noteObject) => {

    createNote
      .createNote(noteObject)
      .then(returnNote => {
        setNote(note.concat(returnNote))
      })
      .catch((error) => (
        console.error(error),
        setError('la api ha petado')
      ))
    //setNote([...note, noteAdd])

  }
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggerNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      createNote.setToken(user.token)
    }
  }, [])
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
      <h1>Notes</h1>

      {
        user
          ? <NoteForm
            addNote={addNote}
            handleLogout={handleLogout}
          />
          : <UserForm
            loginSubmit={LoginSubmit}
            user={user}
          />
      }
      <Note notes={note} />
      {error ? error : ''}
    </div>
  );
}

export default App;

import { useState } from "react";
import Togglabe from "./Togglabe";

export default function UserForm({ loginSubmit }) { // Corrige la desestructuración aquí
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = async (event) => { // No necesitas user aquí
        event.preventDefault();
        loginSubmit({ username, password });
        setUsername(''); // Resetea el username
        setPassword(''); // Resetea el password
    };

    return (
        <div>
            <Togglabe buttonLabel={'Show login'}>
                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <input
                            type='text'
                            value={username}
                            name='Username'
                            placeholder='Username'
                            onChange={({ target }) => setUsername(target.value)} />
                    </div>
                    <div>
                        <input
                            type='password'
                            value={password}
                            name='Password'
                            placeholder='Password'
                            onChange={({ target }) => setPassword(target.value)} />
                    </div>
                    <button>Login</button>
                </form>
            </Togglabe>
        </div>
    );
}

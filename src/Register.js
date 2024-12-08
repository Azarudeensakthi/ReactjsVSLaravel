import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            setError("Passwords don't match");
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
            });
            
            localStorage.setItem('token', response.data.token);
            window.location.href = '/courses'; 
        } catch (error) {
            setError('Error registering');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Register;

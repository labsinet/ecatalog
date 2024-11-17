import React, { useState } from 'react';
import axios from 'axios';
import ProfileComponent from '../ProfileComponent/ProfileComponent';

const LoginComponent = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            setToken(response.data.token);
            setError('');
        } catch (err) {
            setError(err.response?.data?.message || 'Помилка входу');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Вхід</h2>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Пароль:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Увійти</button>
        </form>
        
    );
};

export default LoginComponent;

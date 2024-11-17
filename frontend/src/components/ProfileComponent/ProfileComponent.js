import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileComponent = ({ token }) => {
    const [profile, setProfile] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/profile', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setProfile(response.data);
                setName(response.data.name);
                setEmail(response.data.email);
            } catch (err) {
                console.error('Помилка завантаження профілю');
            }
        };
        fetchProfile();
    }, [token]);

    const handleSave = async () => {
        try {
            const response = await axios.put(
                'http://localhost:5000/api/auth/profile',
                { name, email },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setProfile(response.data);
            setMessage('Профіль оновлено');
        } catch (err) {
            setMessage('Помилка оновлення профілю');
        }
    };

    return (
        <div>
            <h2>Профіль</h2>
            <div>
                <label>Ім'я:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button onClick={handleSave}>Зберегти</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ProfileComponent;

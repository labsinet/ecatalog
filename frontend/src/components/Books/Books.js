import React, { useState, useEffect } from 'react';
import './Books.css';

const Books = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const [header] = useState(
        <thead id="header">
            <tr>
                <th scope="col">Назва книги</th>
                <th scope="col">Автор</th>
                <th scope="col">Кількість</th>
                <th scope="col">BBK</th>
            </tr>
        </thead>
    );

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}api/books`);
                if (!response.ok) {
                    throw new Error(`Помилка: ${response.status} ${response.statusText}`);
                }

            const data = await response.json();
            const filteredBooks = data.filter(book => book.count > 0);
            setBooks(filteredBooks.map(book => (
                <tr key={book.id}>
                    <td>{book.booksname.toUpperCase()}</td>
                    <td>{book.author}</td>
                    <td>{book.count}</td>
                    <td>{book.bbk}</td>
                </tr>
            )));
        } catch (err) {
            setError(err.message); // Встановлення помилки
        }
    };
    fetchData();
}, [baseUrl]);


    return (
        <div id='books'>
            <span id="heading">Доступні Книги</span>
            {error ? (
                <div className="error-message">Не вдалося завантажити дані</div>
            ) : (
                <table id="results" className="table text-center table-hover">
                    {header}
                    <tbody>
                        {books}
                    </tbody>
                </table>
            )}
        </div>
    );
};


export default Books;

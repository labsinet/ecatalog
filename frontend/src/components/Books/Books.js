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

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${baseUrl}api/books`);
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
        };
        fetchData();
    }, [baseUrl]);

    return (
        <div id='books'>
            <span id="heading">Доступні Книги</span>
            <table id="results" className="table text-center table-hover">
                {header}
                <tbody>
                    {books}
                </tbody>
            </table>
        </div>
    );
};

export default Books;

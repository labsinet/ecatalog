import React, { useState } from 'react';
import './search.css';

const Books = () => {
    const [header, setHeader] = useState(null);
    const [books, setBooks] = useState([]);
    const [name, setName] = useState('');
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const fetchData = () => {
        const id = document.getElementById('id').value;
        setHeader(
            <thead id="header">
                <tr>
                    <th scope="col">Назва</th>
                    <th scope="col">Автор</th>
                    <th scope="col">Видання</th>
                    <th scope="col">Місто</th>                            
                    <th scope="col">Рік</th>
                    <th scope="col">К-сть сторінок</th>
                </tr>
            </thead>
        );
        setBooks([]);

        fetch(`${baseUrl}api/books/search/${id}`)
            .then(res => res.json())
            .then(student => {
                if (student.length > 0) {
                    setName(`Знайдено книги`);
                    student.forEach(el => {
                        setBooks(prevBooks => [
                            ...prevBooks,
                            <tr key={el.id}>
                                <td>{el.booksname.toUpperCase()}</td>
                                <td>{el.author}</td>
                                <td>{el.publisher}</td>
                                <td>{el.city}</td>                                        
                                <td>{el.year}</td> 
                                <td>{el.count_page}</td>                                                                               
                            </tr>
                        ]);
                    });
                } else {
                    setHeader(null);
                    setName("Жодної книги з такою назвою або подібною не знайдено");
                }
            });
    };



    return (
        <div id='search' className="text-center">
            <div>
                <input className="form-control sel" type="text" placeholder="Введіть назву книги " id="id" ></input>
                <button className="btn btn-success" onClick={fetchData}>Шукати</button>
            </div><br/>
            {name}
            <table id="sResults" className="table table-hover">
                {header}
                <tbody>
                    {books}
                </tbody>
            </table>
        </div>
    );
};

export default Books;

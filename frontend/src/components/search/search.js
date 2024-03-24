import React from 'react';
import './search.css';

class Books extends React.Component {
    
    state = {
        header: <thead></thead>,
        books: [],
        name: ''
    };

    fetchData = () => {
        var id = document.getElementById('id').value;
        this.setState({header: <thead id="header">
                        <tr>
                            <th scope="col">Назва</th>
                            <th scope="col">Автор</th>
                            <th scope="col">Видання</th>
                            <th scope="col">Місто</th>                            
                            <th scope="col">Рік</th>
                            <th scope="col">К-сть сторінок</th>
                        </tr>
                    </thead>,
            books: []});

        fetch(`http://localhost:5000/api/books/search/${id}`)
            .then(res => res.json())
            .then(student => {
                if(student.length > 0) {
                    this.setState({...this.state, name: `Знайдено книги`});
                    student.forEach(
                        el => this.setState({
                            books: [...this.state.books, 
                                    <tr key={el.id}>
                                        <td>{el.booksname.toUpperCase()}</td>
                                        <td>{el.author}</td>
                                        <td>{el.publisher}</td>
                                        <td>{el.city}</td>                                        
                                        <td>{el.year}</td> 
                                        <td>{el.count_page}</td>                                                                               
                                    </tr>]
                        }))
                }
                else{
                    this.setState({header: []});
                    this.setState({...this.state, name: "Жодної книги з такою назвою або подібною не знайдено"});
                }
                });
    }

    returnIt = el => {
        fetch('/api/return', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    ...el,
                    sid: parseInt(document.getElementById('sid').value)
                })
           });

    }

    render() {
        return (
            <div id='search' className="text-center">
                <div>
                    <input className="form-control sel" type="text" placeholder="Введіть назву книги " id="id" ></input>
                    <button className="btn btn-success" onClick={this.fetchData}>Submit</button>
                </div><br/>
                {this.state.name}
                <table id="sResults" className="table table-hover">
                    {this.state.header}
                    <tbody>
                        {this.state.books}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Books;
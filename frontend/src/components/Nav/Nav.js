import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    state = {};

    update() {
        this.setState(this.state);
    }

    render(){
        return (
            <div id='nav'>
                <img src='../../logo50x50.png' alt="logo" ></img>
                <span id="navtext">e-КАТАЛОГ</span>
                <ul>
                    <li style={window.location.pathname === '/' ? {display: 'none'} : {display: 'inline-block'}}><Link to='/' onClick={this.update}>Головна</Link></li>
                    <li style={window.location.pathname === '/search' ? {display: 'none'} : {display: 'inline-block'}}><Link to='/search' onClick={this.update}>Пошук по назві</Link></li>
                </ul>
            </div>
        );
    }
}

export default Nav;
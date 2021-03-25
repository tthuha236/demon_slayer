import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
        <div className="header">
            <div className="logo">
                <img className="logo_img" src={"./img/logo.jpeg"} />
                <h1>Kimetsu no yaiba wiki</h1>
            </div>
            <nav className="nav">
                <ul className="nav__list">
                    <li ><Link className="nav__link" to="/demon-slayer">Demon Slayer</Link></li>
                    <li><Link className="nav__link"  to="/hashira">Hashira</Link></li>
                    <li><Link className="nav__link"  to="/demon">Demon</Link></li>
                </ul>
            </nav>
        </div>
        )
    }
};

export default Header;
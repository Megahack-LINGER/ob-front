//---- Packages
import React from 'react';
import { Link, Switch } from 'react-router-dom';

//---- Styles
import "./Nav.css"

export default function Nav() {
    return <div id="nav">
        <Switch>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/perfil">Minha Conta</Link>
                <Link to="/admin">Admin</Link>
            </nav>
        </Switch>
    </div>
}


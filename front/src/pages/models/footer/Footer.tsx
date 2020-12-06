//---- Packages
import React from 'react';

//---- Styles
import "./Footer.css"

import cisa from "../../../imagens/arte10.gif"

export default function Footer() {
    return <footer>
    <h2>Desafio Open Banking</h2>
    <h3>Portal de dúvidas</h3>
    <p>Email: <i>linger@gmail.com</i></p>
    <img src={cisa} width="100vw" alt="cisa" />
    <h3> Equipe Linger </h3>
    </footer>
}


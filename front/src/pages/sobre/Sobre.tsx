//---- Packages
import React from 'react';

//---- Styles
import "./Sobre.css"

import cisa from "../../imagens/arte11.gif"

export default function Sobre() {
    return <div id="home">
	<h2>Sobre</h2>
 	<h3>Simplificando a vida</h3>
    	<p>Um projeto para facilitar a vida dos usuários.</p>
    	<img src={cisa} width="100vw" alt="cisa" />
   	<h3>Conheça a CISSA</h3>
        <p>Assistente Virtual 24h - Ajuda em tudo que precisar</p>
        <h3>Conheça a Equipe</h3>
        <p>Time 3 - Desafio Segurança</p>
        <p>Nosso objetivo é desenvolver uma plataforma segura para todos</p>
    </div>
}


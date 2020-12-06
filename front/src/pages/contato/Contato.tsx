//---- Packages
import React from 'react';

//---- Styles
import "./Contato.css"

import cisa from "../../imagens/arte9.gif"

export default function Contato() {
    return <div id="home">
	<h2>Fale Conosco</h2>
 	<h3>Simplificando a vida</h3>
    	<p>Queremos esclarecer suas dúvidade e receber sugestões.</p>
    	<img src={cisa} width="100vw" alt="cisa" />
   	<h3> Conheça nossos canais</h3>
	<p>Chat, Facebook e Instagram</p>
        <h3>Deixe sua sugestão</h3>
        <p>Seu feedback é importante para nossa evolução</p>
        <p>Nosso objetivo é desenvolver uma plataforma segura para todos</p>
    </div>
}


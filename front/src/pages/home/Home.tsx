//---- Packages
import React from 'react';

//---- Styles
import "./Home.css"

import cisa from "../../imagens/arte11.gif"

export default function Home() {
    return <div id="home">
	<h2>O caminho do Cliente</h2>
 	<h3>Simplificando a vida</h3>
    	<p>Olá !!! Antes de acessar as plataformas de Open Banking, nosso objetivo é conscientizar o uso seguro da tecnologia.</p>
    	<img src={cisa} width="400vw" alt="cisa" />
   	<h3> Conheça a CISSA</h3>
	<p>Aprenda como usar a tecnologia de forma segura com nosso GAME</p>
        <h3></h3>
	<video width="800" height="600" controls>
	  <source src="http://ec2-3-22-9-46.us-east-2.compute.amazonaws.com/CISSA.mp4" type="video/mp4" />
	  Your browser does not support the video tag.
	</video>
        <h3>Jogue com a CISSA</h3>
        <p>Após o jogo conheça nossa plataforma!</p>
        <p>CISSA - Uma plataforma segura para todos</p>
    </div>
}


//---- Packages
import React from 'react';

//---- Styles
import "./Home.css"

import cisa from "../../imagens/arte11.gif"
import logo from "../../imagens/logo.png"

export default function Home() {
    return <div id="home">
	<h2>O caminho do Cliente</h2>
 	<h3>Simplificando a vida</h3>
    	<p>Olá !!! Antes de acessar as plataformas de Open Banking, nosso objetivo é conscientizar o uso seguro da tecnologia.</p>
        <h3>Conselheira Inteligente de Segurança Avançada</h3>
    	<img src={logo} width="200vw" alt="logo" />
        <h3> Conheça a CISSA</h3>
    	<img src={cisa} width="300vw" alt="cisa" />
	<h3>Jogue com a CISSA</h3>
	<p>Aprenda como usar a tecnologia de forma segura com nosso GAME</p>
	<video width="800" height="600" controls>
	  <source src="http://ec2-3-22-9-46.us-east-2.compute.amazonaws.com/CISSA.mp4" type="video/mp4" />
	  Your browser does not support the video tag.
	</video>
        <h3>Entre e utilize nossa Plataforma!</h3>
        <p>Após o jogo conheça nossa plataforma!</p>

	<p><a href="/perfil"><button >Minha Conta</button></a></p>
        <p><a href="/admin"><button >Admin</button></a></p>

        <p>CISSA - Uma plataforma segura para todos</p>

    </div>
}


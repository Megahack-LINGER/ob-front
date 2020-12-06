//---- Packages
import React from 'react';

//---- Styles
import "./Perfil.css"

import cisa from "../../imagens/image16.gif"

export default function Perfil() {
    return <div id="home">
	<h2>Minha Conta</h2>
 	<h3>Simplificando a vida</h3>
    	<p>Gerencie de forma centralizada seus recursos financeiros.</p>
    	<img src={cisa} width="100w" alt="cisa" />
   	<h3>Minhas Contas e investimentos</h3>
	<p>Recursos disponívels</p>

        <table id="banks">
        <tr>
                <th>Nome do Cliente</th><th>ID</th><th>Conta</th><th>Banco</th><th>Saldo</th><th>Acesso Cadastro</th>
        </tr>
        <tr>
                <td>Leonardo Matayoshi</td> <td>LYM-001</td><td>000203-020</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td> <td>R$ 10000,00</td>  <td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Leonardo Matayoshi</td><td>LYM-002</td><td>9949490-093</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td>R$ 3000,00</td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>

        </table>


        <h3>Minhas transações e comprovamentes</h3>
        <p>Últimas transações realizadas</p>

        <table id="banks">
        <tr>
                <th>Nome do Cliente</th><th>ID</th><th>Conta</th><th>Banco</th><th>Acesso Transações</th>
        </tr>
        <tr>
                <td>Leonardo Matayoshi</td> <td>LYM-001</td><td>000203-020</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>
        <tr>
                <td>Credito: 01-12-2020 R$ 20,00</td> <td>LYM-001</td><td>000203-020</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>
        <tr>
                <td>Débito: 02-12-2020 R$ 30,00</td> <td>LYM-001</td><td>000203-020</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>


        <tr>
                <td>Leonardo Matayoshi</td><td>LYM-002</td><td>9949490-093</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Débito Pagamento: 02-12-2020 R$ 120,00</td><td>LYM-002</td><td>9949490-093</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>
        <tr>
                <td>Credito VT: 10-12-2020 R$ 200,00 (Lanç. Futuro)</td><td>LYM-002</td><td>9949490-093</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>
        <tr>
                <td>Transferência: 10-12-2020 R$ 120,00 (Lanç. Futuro)</td><td>LYM-002</td><td>9949490-093</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>

        </table>


        <p>CISSA - Uma plataforma segura para todos</p>
    </div>
}


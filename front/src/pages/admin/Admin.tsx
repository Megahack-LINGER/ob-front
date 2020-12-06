//---- Packages
import React from 'react';

//---- Styles
import "./Admin.css"

import cisa from "../../imagens/arte11.gif"

export default function Admin() {
    return <div id="home">
	<h2>Administração</h2>
 	<h3>Gerenciando nossos clientes e instituições financeiras</h3>
    	<p>Plataforma Open Banking centralizada.</p>
    	<img src={cisa} width="100vw" alt="cisa" />

	<hr/>
   	<h2>Account Information Service</h2>
   	<h3>Contas</h3>
	<p>Lista de clientes e contas</p>
        <table id="banks">
        <tr>
                <th>Nome do Cliente</th><th>ID</th><th>Conta</th><th>Banco</th><th>Acesso Cadastro</th>
        </tr>
        <tr>
                <td>Leonardo Matayoshi</td> <td>LYM-001</td><td>000203-020</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Leonardo Matayoshi</td><td>LYM-002</td><td>9949490-093</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Jose Geraldo</td> <td>GERA-001</td><td>000203-021</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Jose Geraldo</td><td>GERA-002</td><td>9949490-043</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>
        <tr>
                <td>Marcia Miura</td> <td>MKM-001</td><td>000203-030</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Nicolas Pereira</td><td>NKP-001</td><td>9949490-393</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Ivo Clemente</td> <td>IVC-001</td><td>000203-030</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Cissa Linger</td><td>CIS-001</td><td>9949490-393</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>


        </table>


	<hr/>
        <h2>Payment Initiation Service</h2>
        <h3>Transações</h3>
        <p>Gerenciamento de transações</p>

        <table id="banks">
        <tr>
                <th>Nome do Cliente</th><th>ID</th><th>Conta</th><th>Banco</th><th>Acesso Transações</th>
        </tr>
        <tr>
                <td>Leonardo Matayoshi</td> <td>LYM-001</td><td>000203-020</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Leonardo Matayoshi</td><td>LYM-002</td><td>9949490-093</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Jose Geraldo</td> <td>GERA-001</td><td>000203-021</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Jose Geraldo</td><td>GERA-002</td><td>9949490-043</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>
        <tr>
                <td>Marcia Miura</td> <td>MKM-001</td><td>000203-030</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Nicolas Pereira</td><td>NKP-001</td><td>9949490-393</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Ivo Clemente</td> <td>IVC-001</td><td>000203-030</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>Cissa Linger</td><td>CIS-001</td><td>9949490-393</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>

        </table>

        <hr/>
        <h3>Bancos</h3>
        <p>Lista de Bancos integrados com nossa plataforma</p>

        <table id="banks">
        <tr>
                <th>ID</th><th>Banco</th><th>Acesso</th>
        </tr>
        <tr>
                <td>OBIEBANK banfico</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>AUTBANK banfico</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>

        </table>

 	<hr/>
        <h3>Integrações e Consentimentos</h3>
        <p>APIS</p>
        <table id="banks">
        <tr>
                <th>ID</th><th>Banco</th><th>Acesso</th>
        </tr>
        <tr>
                <td>CISSA DEVELOPER</td><td><img src="http://ec2-3-22-9-46.us-east-2.compute.amazonaws.com:3002/static/media/arte10.dbf1bf5f.gif" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>

        <tr>
                <td>AUTBANK DEVELOPER</td><td><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEHe95ExdBYhA/company-logo_200_200/0?e=2159024400&v=beta&t=nQGHV1vDgxogJtgQzIPahAJeH92GfCiF9Y9a-fNgqnU" width="40" /></td><td><a href="https://developer.autbank.banfico.com/" target="_blank" >Acessar</a></td>
        </tr>

       <tr>
                <td>OBIEBANK DEVELOPER</td><td><img src="https://s3-eu-west-1.amazonaws.com/psd2e/client-logo/mybank-obie.svg" width="40" /></td><td><a href="https://core.obiebank.banfico.com/user/accounts" target="_blank" >Acessar</a></td>
        </tr>

        </table>

        <p>CISSA - Uma plataforma segura para todos</p>
    </div>
}


//---- Packages
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//---- Screens
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";
import Contato from "./pages/contato/Contato";
import Perfil from "./pages/perfil/Perfil";
import Admin from "./pages/admin/Admin";

//---- Models
import Footer from "./pages/models/footer/Footer";
import Nav from "./pages/models/nav/Nav";

export default function Routes() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/contato" component={Contato} />
          <Route path="/perfil" component={Perfil} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}


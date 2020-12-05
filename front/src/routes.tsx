//---- Packages
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//---- Screens
import Home from "./pages/home/Home";

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
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}


// import React, { useEffect, useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Nav from "./Nav";
import Footer from "./Footer";
import Symptom from "../pages/Symptom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#f2f2f2", fontFamily: "Roboto" }}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/symptom" component={Symptom} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

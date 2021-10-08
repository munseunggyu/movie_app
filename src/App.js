import React,{useEffect, useState} from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import { HashRouter,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" exact={true} component={About} />
      </HashRouter>
    </div>
  );
}

export default App;

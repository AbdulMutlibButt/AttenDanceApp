import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import Home from './Components/Home'
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact >
            <Login />
          </Route>
          <Route path="/home">
            <Home/> 
          </Route>
          <Route path="/user">
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

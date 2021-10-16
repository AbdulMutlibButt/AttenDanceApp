import React from "react";
import 'antd/dist/antd.css';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import Home from './Components/Home'
import MenuAppBar from "./Components/Header";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact >
            <Login />
          </Route>
          <Route path="/home">
            <MenuAppBar/>
            <Home/> 
            <SideBar/>
          </Route>
          <Route path="/user">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";

//import pages
//import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Finance from "./Pages/Finance";
import HR from "./Pages/HR";
import Sales from "./Pages/Sales";
import Support from "./Pages/Support";
import Technology from "./Pages/Technology";

//import login and register
import {Login} from "./components/loginBox/index";
/*
function App() {
  return (
    <Router>
      <div className="App">
        <h1>SE ADMIN PORTAL</h1>
        <nav>
          <ul>
            <li><Link to = "/">login</Link></li>
            <li><Link to = "/Dashboard">Dashboard</Link></li>
            <li><Link to = "/Finance">Finance</Link></li>
            <li><Link to = "/HR">HR</Link></li>
            <li><Link to = "/Sales">Sales</Link></li>
            <li><Link to = "/Support">Support</Link></li>
            <li><Link to = "/Technology">Technology</Link></li>
          </ul>
        </nav>
      </div>

      <Route path = "/" exact component = {login}/>
      <Route path = "/Dashboard" component = {Dashboard}/>
      <Route path = "/Finance" component = {Finance}/>
      <Route path = "/HR" component = {HR}/>
      <Route path = "/Sales" component = {Sales}/>
      <Route path = "/Support" component = {Support}/>
      <Route path = "/Technology" component = {Technology}/>
    </Router>
  );
}
*/
function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;

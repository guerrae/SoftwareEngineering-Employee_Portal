import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

//import pages
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import exLinks from "./Pages/externalLinks";
import adminPage from "./Pages/AdminPage";
//import tempPage from "./Pages/tempPage";

//localStorage.setItem('isAuth', false);

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    }
  }

  render() {
    return(
      <div>
      <Router>
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/Dashboard" component = {Dashboard}/>
          <Route path = "/exLinks" component = {exLinks}/>
          <Route path = "/adminPage" component = {adminPage}/>
          <Route path = "*" component = {Home}/>
        </Switch>
      </Router>
      </div>
    )
  }
}

/*
function App(){
  return(
    <Router>
      <Route path = "/" exact component = {Home}/>
      <Route path = "/Dashboard" component = {Dashboard}/>
      <Route path = "/exLinks" component = {exLinks}/>
      <Route path = "/adminPage" component = {adminPage}/>
    </Router>
  )
}

export default App;
*/
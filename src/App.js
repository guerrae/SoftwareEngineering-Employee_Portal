import React from 'react';
import './App.scss';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";

//import pages
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import exLinks from "./Pages/externalLinks";
import adminPage from "./Pages/AdminPage";

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

//My first test run with "Router"
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

      <Route path = "/" exact component = {Home}/>
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

//Test Login
/*
function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}
*/

//Login straight to App.js
/*
class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        isLoginActive: true
      };
  }

  componentDidMount() {
    //Add .right by default
    this.registerRight.classList.add("right");
  }

  changeState(){
    const {isLoginActive} = this.state;

    if(isLoginActive){
      this.registerRight.classList.remove("right");
      this.registerRight.classList.add("left");
    }
    else{
      this.registerRight.classList.remove("left");
      this.registerRight.classList.add("right");
    }

    this.setState(prevState => ({isLoginActive: !prevState.isLoginActive}));
  }

  render(){
    const {isLoginActive} = this.state;
    const current = isLoginActive ? "Register" : "Login" ;
    const currentActive = isLoginActive ? "login" : "register" ;

    return(
      <div className="App">
        <div className="login">
          <div className="container">
            {isLoginActive && <Login containerRef={(ref) => this.current = ref}/>}
            {!isLoginActive && <Register containerRef={(ref) => this.current = ref}/>}
          </div>
            <RegisterRight current={current} currentActive={currentActive} containerRef={ref => (this.registerRight = ref)} onClick={this.changeState.bind(this)}/>
        </div>
      </div>  
    )
  }
}

const RegisterRight = props => {
  return( 
    <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">
          {props.current}
        </div>
      </div>
    </div>
  );
};
*/

export default App;

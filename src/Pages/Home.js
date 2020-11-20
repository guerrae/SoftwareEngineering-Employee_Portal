import React from 'react';
import './Home.scss';
import {Login, Register} from "../components/loginBox/index";

class Home extends React.Component{
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
        <div className="Home">
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

  export default Home;
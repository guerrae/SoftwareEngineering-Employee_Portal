import React from 'react';
import './Home.scss';
import {Login, Register} from "../components/loginBox/index";

class Home extends React.Component{
    constructor(props){
      super(props);
        this.state = {
          activeHomeCard: true,
        };
    }
  
    componentDidMount() {
      //Add .right by default
      this.registerRight.classList.add("right");
    }
  
    changeState(){
      const {activeHomeCard} = this.state;
  
      if(activeHomeCard){
        this.registerRight.classList.remove("right");
        this.registerRight.classList.add("left");
      }
      else{
        this.registerRight.classList.remove("left");
        this.registerRight.classList.add("right");
      }
  
      this.setState(prevState => ({activeHomeCard: !prevState.activeHomeCard}));
    }
  
    render(){
      const {activeHomeCard} = this.state;
      const current = activeHomeCard ? "Register" : "Login" ;
      const currentActive = activeHomeCard ? "login" : "register" ;
  
      return(
        <div className="Home">
          <div className="login">
            <div className="container">
              {activeHomeCard && <Login containerRef={(ref) => this.current = ref}/>}
              {!activeHomeCard && <Register containerRef={(ref) => this.current = ref}/>}
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
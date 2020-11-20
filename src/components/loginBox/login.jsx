import React from "react";
import loginImg from "../../login.jpg"

export class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className = "base-container" ref = {this.props.containerRef}>
            <div className = "header">Login</div>
            <div className = "content">
                <div className="image">
                    <img className="img" src = {loginImg} alt = "Login"/>
                </div>
                <div className="formUserName">
                    <div className="form-groupA">
                        <label htmlFor="username">Username</label>
                        <input type="text" name = "username" placeholder = "username"/>
                    </div>
                </div>
                <div className="formPassword">
                    <div className="form-groupB">
                        <label htmlFor="password">Password</label>
                        <input type="password" name = "password" placeholder = "password"/>
                    </div>
                </div>
                <div className="footer">
                    <button type = "button" className="btn">Login</button>
                </div>
            </div>
        </div>
    }
}
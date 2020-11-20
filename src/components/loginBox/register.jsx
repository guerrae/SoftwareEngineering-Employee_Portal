import React from "react";
import loginImg from "../../login.jpg"

export class Register extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className = "base-container" ref = {this.props.containerRef}>
            <div className = "header">Register</div>
            <div className = "content">
                <div className="image">
                    <img className="img" src = {loginImg} alt = "Register"/>
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
                    <button type = "button" className="btn">Register</button>
                </div>
            </div>
        </div>
    }
}
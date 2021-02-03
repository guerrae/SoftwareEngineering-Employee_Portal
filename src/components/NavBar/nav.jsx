import React from "react";
import navImg from "../../SE_img.png"
import {Link} from "react-router-dom";

export class Nav extends React.Component{
    render(){
        return <nav className = "nav-container">
                <div className = "header">
                    <div className = "content">
                        <div className="image">
                            <img className="img" src = {navImg} alt = "Navigate"/>
                        </div>
                        <div className="logout">
                            <nav>
                                <ul className="unsortList">
                                    <li><Link to = "/" className="link" onClick={() => localStorage.removeItem('jwt')}>Logout</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
        </nav>
    }
}
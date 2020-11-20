import React from "react";
import navImg from "../../SE_img.png"
import {Link} from "react-router-dom";

export class Nav extends React.Component{
    constructor(props){
        super(props);
    }
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
                                    <li><Link to = "/" className="link">Logout</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
        </nav>
    }
}
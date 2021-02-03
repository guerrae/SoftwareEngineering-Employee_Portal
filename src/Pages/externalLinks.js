import React from 'react';
import {Nav} from "../components/NavBar/index";

export default function externalLinks(){
    return(
        <div className="exLinks">
            <div className="navBar">
                <Nav/>
            </div>
            <div>
                <h1 style={{color: "Black", fontSize: "4em", textAlign: "center"}}>Redirected To External Link</h1>
            </div>
        </div>
    )
}
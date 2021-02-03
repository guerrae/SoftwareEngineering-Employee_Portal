import React from 'react';
import {Nav2} from "../components/NavBar/index";

export default function TempPage(){
    return(
        <div className="tempPage">
            <div className="navBar">
                <Nav2 data="Home"/>
            </div>
            <div>
                <h1 style={{color: "Black", fontSize: "4em", textAlign: "center"}}>Page Not Found</h1>
            </div>
        </div>
    )
}
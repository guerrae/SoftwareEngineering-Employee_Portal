import React from 'react';
import {Nav} from "../components/NavBar/index";

export default function adminPage(){
    return(
        <div className="exLinks">
            <div className="navBar">
                <Nav/>
            </div>
            <div>
                <h1 style={{color: "Black", fontSize: "4em", textAlign: "center"}}>Manage User Accounts</h1>
            </div>
            <div>
                <h1 style={{color: "Black", fontSize: "4em", textAlign: "center"}}>Assign Roles</h1>
            </div>
        </div>
    );
}
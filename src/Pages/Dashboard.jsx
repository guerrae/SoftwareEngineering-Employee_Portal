import React from 'react';
import {Nav2} from "../components/NavBar/index";
import Finance from "../components/Cards/Finance.jsx";
import HR from "../components/Cards/HR.jsx";
import Sales from "../components/Cards/Sales.jsx";
import Support from "../components/Cards/Support.jsx";
import Technology from "../components/Cards/Technology.jsx";
//import NoRole from "../components/Cards/NoRole.jsx";
import Grid from "@material-ui/core/Grid";

class Dashboard extends React.Component{
    render(){
        return(
            <div className="Dashboard">
                <div className="navBar">
                    <Nav2 data="Logout"/>
                </div>
                <div className="cards">
                    <Grid container style={{paddingTop: '2em', paddingRight: '0em', paddingLeft:'10%',}} spacing={0} justify="center">
                        <Grid item xs={12} sm={6} md={4}> <Support/> </Grid>
                        <Grid item xs={12} sm={6} md={4}> <Finance/> </Grid>
                        <Grid item xs={12} sm={6} md={4}> <Sales/> </Grid>
                        <Grid item xs={12} sm={6} md={4}> <HR/> </Grid>
                        <Grid item xs={12} sm={6} md={4}> <Technology/> </Grid>
                        {/*<Grid item xs={12} sm={6} md={4}> <NoRole/> </Grid>*/}
                    </Grid>
                </div>
            </div>
        );
    }
}
export default Dashboard;
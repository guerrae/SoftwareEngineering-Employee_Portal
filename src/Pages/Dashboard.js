import React from 'react';
//import './Dashboard.scss';

import {Nav} from "../components/NavBar/index";
import Finance from "../components/Cards/Finance.jsx";
import HR from "../components/Cards/HR.jsx";
import Sales from "../components/Cards/Sales.jsx";
import Support from "../components/Cards/Support.jsx";
import Technology from "../components/Cards/Technology.jsx";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gridContainer:{
        paddingTop: '3em',
        paddingRight: '5em',
        paddingLeft:'10em',
    },
});

export default function Dashboard(){
    const classes = useStyles();
    return(
        <div className="Dashboard">
            <div className="navBar">
                <Nav/>
            </div>
            <div className="cards">
                <Grid container maxWidth="lg" className={classes.gridContainer} spacing={3} justify="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Finance/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <HR/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Sales/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Support/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Technology/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

/*
<Grid container direction="column" justify="center">
                <Grid item>
                    <Nav/>
                </Grid>
                <Grid item container>
                    <Grid item xs={false} sm={1}/>
                        <Grid item xs={12} sm={6} md={4}>
                            <Finance/>
                            <HR/>
                            <Sales/>
                            <Support/>
                            <Technology/>
                        </Grid>
                    <Grid item xs={false} sm={1}/>
                </Grid>
            </Grid>
*/

/*for gridContainer
paddingLeft:'10em',
        paddingRight: '5em',
        paddingTop: '2em',
        paddingBottom: '5em'
*/
import React from 'react';
import {Nav} from "../components/NavBar/index";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    button: {
        //margin: theme.spacing(1),
        color: theme.palette.primary.main = "white",
        backgroundColor: theme.palette.primary.main = "#282c34",

        "&:hover":{
            color: theme.palette.primary.main = "white",
            backgroundColor: theme.palette.primary.main = "#808080",
        }
    },
}))

//export default function externalLinks(){
const ExternalLinks = () => {
    const classes = useStyles();
    return(
        <div className="exLinks">
            <div className="navBar">
                <Nav/>
            </div>
            <div>
                <h1 style={{color: "Black", fontSize: "4em", textAlign: "center"}}>Redirected To External Link</h1>
            </div>
            <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                <Button className={classes.button} variant="contained" size="small" component={Link} to="/Dashboard">
                  Return to Dashboard
                </Button>
            </div>
        </div>
    );
};
export default ExternalLinks;
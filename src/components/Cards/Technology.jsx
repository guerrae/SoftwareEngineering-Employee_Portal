import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import techImg from "./technologyLogo.png"//w512 h422
import {Link} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#282c34",
    },
    secondary: {
      main: "#424242",
    },
    action: {
      hover: "#d32f2f"
    }
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
    height: 480,
    marginTop: 20,
    marginBottom: 20
  },
  media:{
    display: "flex",
    justifyContent: "center",
    paddingTop: "1em",
  },
  img:{
    maxWidth: 150,
    Height: 135,
  },
  cardActions:{
    display:"flex",
    flexDirection: "column",
    alignItems: "center"
  },
  button:{
    paddingBottom: "1em",
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          <img className={classes.img} src = {techImg} alt = "tech"/>
        </CardMedia>  
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Technology
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Links to access all Technology options.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <ThemeProvider theme={theme}>
          <div className={classes.button}>
            <Button  variant="contained" size="small" color="primary" component={Link} to="/exLinks">
              Application Monitoring
            </Button>
          </div>
          <div className={classes.button}>
            <Button  variant="contained" size="small" color="primary" component={Link} to="/exLinks">
              Tech Support
            </Button>
          </div>
          <div className={classes.button}>
            <Button  variant="contained" size="small" color="primary" component={Link} to="/exLinks">
              App Development
            </Button>
          </div>
          <div className={classes.button}>
            <Button variant="contained"size="small" color="primary" component={Link} to="/exLinks">
              App Admin
            </Button>
          </div>
          <div className={classes.button}>
            <Button variant="contained"size="small" color="primary" component={Link} to="/exLinks">
              Release Management
            </Button>
          </div>
        </ThemeProvider>
      </CardActions>
    </Card>
  );
}
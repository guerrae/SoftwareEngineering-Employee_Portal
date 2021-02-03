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
import hrImg from "./hrLogo.png"; //w330 h291
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
          <img className={classes.img} src = {hrImg} alt = "hr"/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Human Resources
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Links to access all Human Resources options.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <ThemeProvider theme={theme}>
          <div className={classes.button}>
              <Button  variant="contained" size="small" color="primary" component={Link} to="/exLinks">
                New Hire On-boarding
              </Button>
          </div>
          <div className={classes.button}>
              <Button  variant="contained" size="small" color="primary" component={Link} to="/exLinks">
                Benefits
              </Button>
          </div>
          <div className={classes.button}>
              <Button  variant="contained" size="small" color="primary" component={Link} to="/exLinks">
                Payroll
              </Button>
          </div>
          <div className={classes.button}>
              <Button variant="contained"size="small" color="primary" component={Link} to="/exLinks">
                Off-boarding
              </Button>
          </div>
          <div className={classes.button}>
              <Button variant="contained"size="small" color="primary" component={Link} to="/exLinks">
                HR Reports
              </Button>
          </div>
        </ThemeProvider>
      </CardActions>
    </Card>
  );
}
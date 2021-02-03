//npm install @material-ui/core
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import financeImg from "./financeLogo.png";//w980 h882
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

const useStyles = makeStyles(theme=> ({
  root: {
    maxWidth: 330,
    height: 480,
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
    alignItems: "center",
    paddingTop: "1em",
    //color: theme.palette.primary.main = "#282c34",
  },
  button:{
    paddingBottom: "1em",
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          <img className={classes.img} src = {financeImg} alt = "hand-money"/>
        </CardMedia>  
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Finance
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Links to access all Finance options.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <ThemeProvider theme={theme}>
          <div className={classes.button}>
            <Link to="/exLinks">
              <Button variant="contained" size="small" color="primary">
                Finance Reports
              </Button>
            </Link>
          </div>
          <div className={classes.button}>
            <Link to="/exLinks">
              <Button  variant="contained" size="small" color="primary">
                Accounts Payable
              </Button>
            </Link>
          </div>
          <div className={classes.button}>
            <Link to="/exLinks">
              <Button  variant="contained" size="small" color="primary">
                Accounts Receivable
              </Button>
            </Link>
          </div>
          <div className={classes.button}>
            <Link to="/exLinks">
              <Button variant="contained"size="small" color="primary">
                Tax
              </Button>
            </Link>
          </div>
        </ThemeProvider>
      </CardActions>
    </Card>
  );
}
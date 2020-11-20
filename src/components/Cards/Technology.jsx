import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import techImg from "./technologyLogo.png"//w512 h422

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 480
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
        <div className={classes.button}>
          <Button  variant="contained" size="small" color="primary" href="/exLinks">
            Application Monitoring
          </Button>
        </div>
        <div className={classes.button}>
          <Button  variant="contained" size="small" color="primary" href="/exLinks">
            Tech Support
          </Button>
        </div>
        <div className={classes.button}>
          <Button  variant="contained" size="small" color="primary" href="/exLinks">
            App Development
          </Button>
        </div>
        <div className={classes.button}>
          <Button variant="contained"size="small" color="primary" href="/exLinks">
            App Admin
          </Button>
        </div>
        <div className={classes.button}>
          <Button variant="contained"size="small" color="primary" href="/exLinks">
            Release Management
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
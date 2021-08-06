import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Rats from './images/rats.jpg';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

    
const paperStyle={height:'50px', width:'500px', margin: '10px', '50px': '20px' };

const hStyle = { color: 'red' };

  return (
    <div className="Card1">
      <header>
      <Paper elevation={10} style={paperStyle} className="title">
        <h1>Ville d'Ivry-sur-seine</h1>
      </Paper>
      </header>
      <div className="p1">
        <Card>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              <p id="1">Diffusé le 03/08/2021 à 09h50</p>
            </Typography>
            <Typography variant="h5" component="h2">
          <img src={Rats} alt="Problem" />
            </Typography>
            <Typography className={classes.pos} style={ hStyle }>
              <p id="2">A régler au plus vite</p>
            </Typography>
            <Typography variant="body2" component="p">
              <p id="3">des rats on été trouver près de la gare vers la ou il y a les travaux</p>
              <br />
              {'"21 Rue de la gare"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Régler le Problème</Button>
          </CardActions>
        </Card>
        </div>
    </div>
  );
  }
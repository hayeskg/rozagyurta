import React from 'react';
import {Card, CardMedia, Button, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 200,
    height: 250,
    margin: 20,
    // display: 'flex',
    // flexDirection:'column',
    alignItems: 'center',
  },
  pic: {
    height: 150
  },
  button: {
    background: '#efa3c9',
    height: 50 
  },
  grid:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center'
  }
}));

const CardItem = ({image, english}) => {
  const {url, en, hun} = image;
  const classes = useStyles();
  console.log(url)
  return (
      <Grid item xs={12} md={3} className={classes.grid}>
      <Card className={classes.card}>
        <CardMedia 
          className = {classes.pic}
          image={url}
          title={en}
        />
        <div className='cardDesc'>
          <h4>{!english?en:hun}</h4>
        </div>
        <Button fullWidth className={classes.button}>{!english?'Details':'Részletek'}</Button>
      </Card>
      </Grid>
  );
};

export default CardItem;
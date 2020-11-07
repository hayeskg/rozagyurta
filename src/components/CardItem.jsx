import React from 'react';
import {Grid, Card, CardMedia, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 200,
    height: 250,
    margin: 20,
  },
  pic: {
    height: 150
  },
  button: {
    background: '#efa3c9',
    height: 50 
  }
}));

const CardItem = ({image, english}) => {
  const {url, en, hun} = image;
  const classes = useStyles();
  return (
    <Grid item key={image.en} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia 
          className = {classes.pic}
          image={url}
          title={en}
        />
        <h4 className={classes.text}>{!english?en:hun}</h4>
        <Button fullWidth className={classes.button}>{!english?'Details':'Részletek'}</Button>
      </Card>
    </Grid>
  );
};

export default CardItem;
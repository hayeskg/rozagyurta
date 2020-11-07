import React from 'react';
import {earrings} from '../images/earrings/index';
import CardItem from './CardItem';
import {Container, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    
  },
}));

const EarList = ({english}) => {
  const classes = useStyles()
  return (
    <>
    <h3 style={{justifyContent:'center'}}>{!english?'Earrings':'Fülbevalók'}</h3>
    <Container className={classes.container}>
      <Grid container spacing={2}>
      {earrings.map(image=>{
        return (
          <CardItem image={image} english={english} key={image.url}/>
        )
      })}
      </Grid>
    </Container>
    </>
  );
};

export default EarList;
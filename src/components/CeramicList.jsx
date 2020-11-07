import React from 'react';
import {ceramics} from '../images/ceramics/index';
import CardItem from './CardItem';
import {Container, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
}));


const CeramicList = ({english}) => {
  const classes = useStyles()
  return (
    <>
    <h3 style={{justifyContent:'center'}}>{!english?'Ceramics':'Kerámiák'}</h3>
    <Container className={classes.container}>
      <Grid container spacing={2} >
      {ceramics.map(image=>{
        return (
          <CardItem image={image} english={english} key={image.url}/>
        )
      })}
      </Grid>
       </Container>
    </>
  );
};

export default CeramicList;
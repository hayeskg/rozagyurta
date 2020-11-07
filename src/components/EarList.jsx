import React from 'react';
import {earrings} from '../images/earrings/index';
import CardItem from './CardItem';
import {Container, Grid} from '@material-ui/core'


const EarList = ({english}) => {
  return (
    <div className='productList'>
      <h3>{!english?'Earrings':'Fülbevalók'}</h3>
      {earrings.map(image=>{
        return (
          <Container maxWidth="md">
            <Grid container spacing={4} key={image.url}>
              <CardItem image={image} english={english}/>
            </Grid>
          </Container>
        )
      })}
    </div>
  );
};

export default EarList;
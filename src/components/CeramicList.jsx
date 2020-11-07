import React from 'react';
import {ceramics} from '../images/ceramics/index';
import CardItem from './CardItem';
import {Container, Grid} from '@material-ui/core'


const CeramicList = ({english}) => {
  return (
    <div className='productList'>
      <h3>{!english?'Ceramics':'Kerámiák'}</h3>
      {ceramics.map(image=>{
        return (
          <Container maxWidth="100%">
            <Grid container spacing={2} justify='center' key={image.url}>
              <CardItem image={image} english={english}/>
            </Grid>
          </Container>
        )
      })}
    </div>
  );
};

export default CeramicList;
import React from 'react';
import { Card, Typography, Grid } from '@material-ui/core';


import image1 from '../images/carousel/1.jpg'
import image2 from '../images/carousel/2.jpg'
import image3 from '../images/carousel/3.jpg'
import image4 from '../images/carousel/4.jpg'

const products = [
  {
    name: 'fulbevalo1',
    image: image1,
    description: 'fehwuoieowjeiwojeiowj'
  },
  {
    name: 'fulbevalo2',
    image: image2,
    description: 'fehwuoieowjeiwojeiowj'
  },
  {
    name: 'fulbevalo3',
    image: image3,
    description: 'fehwuoieowjeiwojeiowj'
  },
  {
    name: 'fulbevalo4',
    image: image4,
    description: 'fehwuoieowjeiwojeiowj'
  },

]

const ProductList = () => {
  return (
    <div className='list'>
      <Grid container spacing={2} justify="center">
        {products.map(product => {
          return (
            < Card item className='productCard'>
              <Typography variant='h5'
              >{product.name}</Typography>
              <img src={product.image} alt={product.description} />
              <Typography variant='subtitle2'
              >{product.description}</Typography>
            </Card>
          )
        })}
      </Grid>
    </div>
  );
};

export default ProductList;
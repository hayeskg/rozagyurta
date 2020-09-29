import React from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import image1 from '../images/carousel/1.jpg'
import image2 from '../images/carousel/2.jpg'
import image3 from '../images/carousel/3.jpg'
import image4 from '../images/carousel/4.jpg'
// import image5 from '../images/carousel/5.jpg'
import image6 from '../images/carousel/6.jpg'
import image7 from '../images/carousel/7.jpg'
import image8 from '../images/carousel/8.jpg'
import image9 from '../images/carousel/9.jpg'
import image10 from '../images/carousel/10.jpg'
import image11 from '../images/carousel/11.jpg'
import image12 from '../images/carousel/12.jpg'
import image13 from '../images/carousel/13.jpg'
import image14 from '../images/carousel/14.jpg'
import image15 from '../images/carousel/15.jpg'
import image16 from '../images/carousel/16.jpg'
import image17 from '../images/carousel/17.jpg'
import image18 from '../images/carousel/18.jpg'
import image19 from '../images/carousel/19.jpg'
// import image20 from '../images/carousel/20.jpg'
import image21 from '../images/carousel/21.jpg'




const slideImages = [
  image1, image2, image3, image4, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image21
]

const interval = 3000

const CarouselComponent = () => {
  return (
    <div className='carousel'>
      <AliceCarousel autoPlay autoPlayInterval={interval} dotsDisabled={true} >
        {slideImages.map(image => {
          return (
            <div className='sliderimgcont' key={image}>
              <img src={image} className='sliderimg' alt={image} />
            </div>
          )
        })}
      </AliceCarousel>
    </div>
  );
};

export default CarouselComponent;
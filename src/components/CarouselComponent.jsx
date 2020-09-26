import React from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import image1 from '../images/carousel/img_2917.jpg'
import image2 from '../images/carousel/img_2939.jpg'
import image3 from '../images/carousel/img_2984.jpg'
import image4 from '../images/carousel/img_3007.jpg'
import image5 from '../images/carousel/img_3026.jpg'
import image6 from '../images/carousel/img_3027.jpg'
import image7 from '../images/carousel/img_3030.jpg'
import image8 from '../images/carousel/img_3033.jpg'
import image9 from '../images/carousel/img_3036.jpg'



const slideImages = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9
]

const interval = 5000

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
      {/* <GallerySlider photos={photos} /> */}
      {/* <ImageGallery
        items={photoImagesArray}
        original={photoImagesArray.original}
        lazyLoad={true}
        showThumbnails={false}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        slideDuration={1000}
        slideInterval={3000}
        sizes={'64x64'}
      /> */}
      {/* <Slider dots>
        <div>
          <img src={image1} className='sliderimg' />
          <img src={image2} className='sliderimg' />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider> */}
    </div>
  );
};

export default CarouselComponent;
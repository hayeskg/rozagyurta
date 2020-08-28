import React from 'react';
import ImageGallery from "react-image-gallery";
import { photoImagesArray, mockupImagesArray } from '../images/utils/images'

const Carousel = () => {
  return (
    <div className="carousel">
      <ImageGallery
        items={photoImagesArray}
        lazyLoad={true}
        showThumbnails={false}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        slideDuration={1000}
        slideInterval={5000}
        className="introGallery"
      />
    </div>
  );
};

export default Carousel;
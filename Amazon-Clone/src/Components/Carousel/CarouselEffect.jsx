import React from 'react';
import styles from './CarouselEffect.module.css';
import { Carousel } from "react-responsive-carousel";
import { img } from "./images/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img?.map((imageItemLink, index) => {
          return <img key={index} src={imageItemLink} /> // if it is not working replace a key by this=> key="{imageItemLink}"
        })}
      </Carousel>
      <div className={styles.hero_img}></div>
    </div>
  );
};

export default CarouselEffect; 
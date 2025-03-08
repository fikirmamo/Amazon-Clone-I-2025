import React from "react";
import Category from "../../Components/Category/Category.jsx";
import Product from "../../Components/Product/Product.jsx";
import LayOut from "../../Components/LayOut/LayOut.jsx";
import CarouselEffect from "../../Components/Carousel/CarouselEffect.jsx";


const Landing = () => {
  return (
    <LayOut>
      <CarouselEffect />
      <Category/>
      <Product/>
    </LayOut>
  );
};

export default Landing;

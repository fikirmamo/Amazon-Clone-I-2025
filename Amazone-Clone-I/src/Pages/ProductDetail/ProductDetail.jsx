import React, { useEffect, useState } from "react";
// import styles from "./Product.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/endpoints";
import ProductCard from "../../Components/Product/ProductCard.jsx";
import Loader from "../../Components/Loader/Loader.jsx";

const ProductDetail = () => {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      // .get(`${producturl}/products/${productId}`)
      //${producturl} replaced by https://fakestoreapi.com/products/
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  console.log(product);
  return (
    <LayOut>
      {isLoading ? <Loader /> : (<ProductCard product={product} flex={true}
      renderDesc={true} renderAdd={true}
      
      />)}
    </LayOut>
  )
};

export default ProductDetail;

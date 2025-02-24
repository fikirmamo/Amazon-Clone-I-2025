import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";


const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return(
    <section className={styles.products_container}>
    {products?.map((singleProduct) => {
      return <ProductCard product={singleProduct} key={singleProduct.id} />;
    })}
  </section>
  )
  
};

export default Product;

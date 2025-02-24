import React from 'react'
import styles from './Product.module.css'
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat.jsx";

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;
  return (
    <div className={`${styles.card_container}`}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={styles.rating}>
          {/* rating */}
          <Rating value={rating?.rate||0} precision={0.1} />
          {/* count */}
          <small>{rating?.count||0}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={styles.button}> add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
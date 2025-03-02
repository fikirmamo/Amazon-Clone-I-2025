import React, { useEffect, useState } from "react";
import styles from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/endpoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

const Results = () => {
  const [results, setResults] = useState([])
  const  [isLoading, setIsLoading] = useState (false)
  const { categoryName } = useParams()
  // console.log(categoryName)
  useEffect(() => {
    console.log(categoryName);
    axios.get(`${producturl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data)
        setIsLoading(false)
        console.log(res.data)
      })
      .catch((err) => {

        console.log(err)
        setIsLoading(false)
      })
  }, [])

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.products_container}>
            {results?.map((product) => {
              return <ProductCard key={product.id} product={product} renderDesc={false} renderAdd={true}/>
            })}
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Results;

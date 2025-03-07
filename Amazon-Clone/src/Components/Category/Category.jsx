import React from 'react';
import styles from './Category.module.css';
import { categoryInfos } from "./categoryFullInfos.js";
import CategoryCard from './CategoryCard.jsx';




const Category = () => {
  return (
    <section className={styles.Category_container}>
      {categoryInfos?.map((infos, index) => (
          <CategoryCard key={index} data={infos}/>
        ))}
    </section>
  )
}

export default Category;
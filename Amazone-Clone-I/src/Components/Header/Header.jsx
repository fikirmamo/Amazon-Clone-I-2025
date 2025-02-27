import React, { useContext } from "react";
import styles from './Header.module.css';
import {Link} from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {

  const [{basket}, dispatch]=useContext(DataContext)
  // console.log(basket.length)


  return (
    <>
      <section>
        <div className={styles.header_container}>
          {/* logo section */}
          <div className={styles.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>USA</span>
              </div>
            </div>
          </div>

          {/* search section */}
          <div className={styles.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>

          {/* other section */}

          <div className={styles.order_container}>
            <Link to="/language-select" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="USA flag"
              />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="SignIn">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            <Link to="/Orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={styles.cart}>
              <BiCart size={35} />
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;

import React, { useState, useContext } from "react";
import styles from "./Auth.module.css";
import { Link, useNavigate} from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {ClipLoader} from "react-spinners" 
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate()

  // console.log(user);
  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name == "signin") {
      //firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate("/")
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });

        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate("/");

        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });

        });
    }
  };
  // console.log(password, email)
  return (
    <section className={styles.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={styles.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={styles.login_signInButton}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "sign in"}
          </button>
        </form>
        {/* agreement  */}
        <p>
          By signing in you agree to AMAZONE FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* creat acount btn */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={styles.login_registerButton}
        >
          {loading.signUp ? <ClipLoader color="#000" size={15} /> : "Create your Amazon Account"}
          Creat your Amazon Account
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;

import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-373f5/us-central1/api",
  //deployed version of firebase function
  //"#"
  //deployed version of amazon server on render.com
  // baseURL: "https://amazon-api-deploy-k3bn.onrender.com/",
  // baseURL: "http://localhost:5000/",
  baseURL: "http://127.0.0.1:5001/clone-373f5/us-central1/api",
});

export {axiosInstance};
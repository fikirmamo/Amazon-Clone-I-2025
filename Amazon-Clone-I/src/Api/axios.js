import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-373f5/us-central1/api",

  //deployed version of firebase function
  //"coming soon"

  //deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-k3bn.onrender.com/",
});

export {axiosInstance};
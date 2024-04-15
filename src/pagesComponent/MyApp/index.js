import { useEffect, useState } from "react";
import axios from "axios";

// CSS Module
import styles from "./index.module.css";

// components
import NavbarComponent from "../../components/NavbarComponent";
import ProductSection from "../../components/ProductSection";
import HeaderComponent from "../../components/HeaderComponent";

// Context
import ReactContext from "../../context/ReactContext";

// Axios Instance
const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

// Api Costant for Monitor the Api Status
const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inprogress: "IN_PROGRESS",
};

const MyApp = () => {
  const [data, setData] = useState([]);
  const [categoryText, setCategoryText] = useState("");
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [errMsg, setErrMsg] = useState("");

  const getData = async () => {
    try {
      setApiStatus(apiStatusConstants.inprogress);
      const response = await instance.get("/products");
      setData(response?.data?.products);
      setApiStatus(apiStatusConstants.success);
    } catch (error) {
      setApiStatus(apiStatusConstants.failure);
      setErrMsg(error?.message || "Error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReactContext.Provider
      value={{
        apiStatus,
        data,
        categoryText,
        setCategoryText,
        getData
      }}>
      <div className={styles.myApp}>
        <NavbarComponent />
        <HeaderComponent />
        <ProductSection />
      </div>
    </ReactContext.Provider>
  );
};

export default MyApp;
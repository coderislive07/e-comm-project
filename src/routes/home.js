import React, { useEffect, useContext, useState } from "react";
import Hcategory from "../components/Homecategory/HomeCategory";
// import Hero from "../components/Hero";
import Products from "../components/Products/Products";
import "./home.css";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../utils/context";
import InfoCompo from "../components/InfoCompo/InfoCompo";
import Carousal from "../components/Caraousal/Carousal";

const Home = () => {
  const { setstate } =
    useContext(Context); /* setstate = {categories: null, products: null} */

  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  useEffect(() => {
    setstate({ products, categories });
  }, [products, categories]);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  return (
    <div>
      {/* <Hero /> */}
      <Carousal />
      <div className="main-content new-container">
        <div className="layout">
          <Hcategory />
          <InfoCompo />
          <Products headingText="All Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;

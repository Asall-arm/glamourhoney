import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AllProductsBox from "../../Components/AllProductsBox/AllProductsBox"
import './AllProducts.css'
import axios from "axios";


const AllProduct = () => {
  let [ AllProduct, setAllProduct ] = useState([])
  const fetchAllProduct = async () => {
    try {
      let res = await axios("http://localhost:3000/allproducts");
      setAllProduct(res.data);
      console.log(AllProduct);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  },[]);


  return (<><Navbar /><h2 className="m-2">تمام محصولات ...</h2>
    <div className="product-list">
      {AllProduct?.map(product => (
        <AllProductsBox key={product.id} product={product} />
      ))}
    </div><Footer /></>
  );
};

export default AllProduct;

import React, { useEffect, useState } from 'react'
import "./AmountProducts.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import AddNewProduct from '../../Components/AddNewProduct/AddNewProduct'
import NewProductsTable from '../../Components/NewProductsTable/NewProductsTable'
import EndlessFooter from '../../../Footer/EndlessFooter'


const AmountProducts = () => {

  const [allProducts, setAllProducts] = useState([]);

useEffect(() => {
  getAllProducts();
}, []);

const getAllProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/allproducts"); 
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    setAllProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}; //lifting up css

  return (

      <>
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <AddNewProduct getAllProducts={getAllProducts} />
        <NewProductsTable allProducts={allProducts} getAllProducts={getAllProducts} />

      </div>
      <EndlessFooter />
    </>

  )
}

export default AmountProducts

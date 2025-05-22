import React from 'react'
import "./AddNewProduct.css"
import { useState } from 'react';

const AddNewProduct = ({getAllProducts}) => {

  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductImage, setNewProductImage] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductColors, setNewProductColors] = useState("");
  const [newProductSale, setNewProductSale] = useState("");

  const newProductInfo ={
    name: newProductName,
    price: newProductPrice,
    image: newProductImage,
    popularity: newProductPopularity,
    count: newProductCount,
    colors: newProductColors,
    sale: newProductSale
  }

  const addNewProduct = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProductInfo)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        getAllProducts()
        emptyInputs()
      });
  }

  function emptyInputs() {

setNewProductName("");
setNewProductPrice("");
setNewProductImage("");
setNewProductPopularity("");
setNewProductCount("");
setNewProductColors("");
setNewProductSale("");

  }

  return (
    <div className='anp-main'>
      <h1 className="anp-title">افزودن محصول جدید</h1>

      <form action="#" className='anp-form'>
        <div className="anp-form-wrap">
            <div className="anp-form-group">
                <input type="text" placeholder='اسم محصول را وارد کنید' className='anp-input' value={newProductName} onChange={() => setNewProductName(event.target.value)}  />
            </div>
            <div className="anp-form-group">
                <input type="text" placeholder='موجودی محصول را وارد کنید' className='anp-input' value={newProductCount} onChange={() => setNewProductCount(event.target.value)} />
            </div>
            <div className="anp-form-group">
                <input type="text" placeholder='میزان محبوبیت محصول را وارد کنید' className='anp-input' value={newProductPopularity} onChange={() => setNewProductPopularity(event.target.value)} />
            </div>
            <div className="anp-form-group">
                <input type="text" placeholder='تعداد رنگ‌بندی محصول را وارد کنید' className='anp-input' value={newProductColors} onChange={() => setNewProductColors(event.target.value)} />
            </div>
            <div className="anp-form-group">
                <input type="text" placeholder='قیمت محصول را وارد کنید' className='anp-input' value={newProductPrice} onChange={() => setNewProductPrice(event.target.value)} />
            </div>
            <div className="anp-form-group">
                <input type="text" placeholder='آدرس عکس محصول را وارد کنید' className='anp-input' value={newProductImage} onChange={() => setNewProductImage(event.target.value)} />
            </div>
            <div className="anp-form-group">
                <input type="text" placeholder='میزان فروش محصول را وارد کنید' className='anp-input' value={newProductSale} onChange={() => setNewProductSale(event.target.value)} />
            </div>
        </div>
        <button className='anp-btn' onClick={addNewProduct}>ثبت محصول</button>
      </form>
    </div>
  )
}

export default AddNewProduct

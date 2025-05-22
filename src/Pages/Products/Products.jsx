import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Product from "../../Components/Product/Product";
import { useNavigate } from "react-router-dom";

import "./Products.css";

const Products = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState({
    womenproduct: [],
    menproduct: [],
    kidsproduct: [],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } 
      catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="product-container">
        {Object.keys(products).map((category) => (
          <div key={category} className="product-section">
            <div className="section-header">
              <h2>
                {category === "womenproduct"
                  ? "محصولات زنانه"
                  : category === "menproduct"
                  ? "محصولات مردانه"
                  : "محصولات بچگانه"}
              </h2>
            </div>
            <div className="product-grid">
              {products[category].map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  // price={product.price}
                  // image={product.image}
                />
              ))}
            </div>
            <button
              className="view-all-button"
              onClick={() => {
                if (category === "womenproduct") {
                  navigate("/products/allwomenproduct");
                } else if (category === "menproduct") {
                  navigate("/products/allmenproduct");
                } else {
                  navigate("/products/allkidsproduct");
                }
              }}
            >
              مشاهده تمام محصولات...
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Products;

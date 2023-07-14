import React, { useEffect, useState } from "react";
import apicall from "../api/api";

import "./productcard.css";

export default function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apicall();
        setProducts(data);
      } catch (error) {
        alert(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h2>{product.title}</h2>
          <img src={product.image_url} alt={product.title} />
        </div>
      ))}
    </div>
  );
}

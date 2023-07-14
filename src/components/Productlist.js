import React from "react";
import ProductCard from "./ProductCard";
import "./productlist.css";

export default function Productlist({ title, image_url }) {
  return (
    <div className="product-container">
      <ProductCard></ProductCard>
      <span className="product-detail">product detail</span>
    </div>
  );
}

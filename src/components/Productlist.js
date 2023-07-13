import React from "react";
import { Link } from "react-router-dom";
import "./productlist.css";

export default function Productlist({ title, image_url }) {
  return (
    <div className="product-container">
      <div className="product-content">
        <img src={image_url} alt="product picture" />
        <h3>{title}</h3>
        <span className="product-detail">product detail</span>
      </div>
    </div>
  );
}

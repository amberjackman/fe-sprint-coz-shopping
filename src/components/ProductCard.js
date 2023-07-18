import React, { useEffect, useState } from "react";
import apicall from "../api/api";
import Modal from "./Modal";
import "./productcard.css";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [products]);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => openModal(product)}
        >
          <h2>{product.title}</h2>
          <img src={product.image_url} alt={product.title} />
        </div>
      ))}

      {isOpen && selectedProduct && (
        <Modal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

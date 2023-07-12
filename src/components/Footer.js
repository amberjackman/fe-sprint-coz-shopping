import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-content">
        개인정보 처리방침 | 이용 약관 All right reserved @ codestates
      </footer>
    </div>
  );
};

export default footer;

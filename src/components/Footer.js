import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-content">
        <div>개인정보 처리방침 | 이용 약관 </div>
        <div> All right reserved @ codestates</div>
      </footer>
    </div>
  );
};

export default footer;

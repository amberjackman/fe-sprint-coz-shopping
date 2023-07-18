import React, { useState } from "react";
import "./modal.css";
import { useEffect } from "react";

const Modal = ({ product, onClose }) => {
  // isOpen 상태를 삭제합니다.

  const closeModal = () => {
    onClose(); // 부모 컴포넌트로부터 전달받은 onClose 함수를 호출하여 모달을 닫습니다.
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={product.image_url} alt={product.title} onClick={closeModal} />
      </div>
    </div>
  );
};
// const openModal = () => {
//   setIsOpen(true);
// };

// const closeModal = () => {
//   setIsOpen(false);
// };

// useEffect(() => {
//   // 컴포넌트가 마운트될 때 모달을 열도록 설정
//   setIsOpen(false);
// }, []);

// return <>{isOpen && <ModalContent product={product} onClose={closeModal} />}</>;
// }
// };

// const ModalContent = ({ product, onClose }) => {
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <img src={product.image_url} alt={product.title} onClick={onClose} />
//       </div>
//     </div>
//   );
// };

export default Modal;

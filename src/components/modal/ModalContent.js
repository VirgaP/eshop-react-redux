import React from 'react';

const ModalContent = ({ children }) => (
  <div className="modal-board__content">
    <div className="container--inner">
      {children}
    </div>
  </div>
);

export default ModalContent;

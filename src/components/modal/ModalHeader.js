import React from 'react';

const ModalHeader = ({ headerTitle, children }) => (
  <div className="board-header">
    <span className="modal-header__title">
      {headerTitle}
    </span>
    {children}
  </div>
);

export default ModalHeader;

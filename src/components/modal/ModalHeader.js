import React from 'react';

const ModalHeader = ({ headerTitle, children }) => (
  <div className="board-header">
    <span className="board-header__title">
      {headerTitle}
    </span>
    {children}
  </div>
);

export default ModalHeader;

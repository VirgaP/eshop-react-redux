import React from 'react';

const Modal = ({ id, show, children }) => {
  const showHideClassName = show ? 'modal-board display-block modal-board' : 'modal-board display-none';
  return (
    <div className={showHideClassName} id={id}>
      <div className="board-container modal-board__container">
        {children}
      </div>
    </div>
  );
};

export default Modal;

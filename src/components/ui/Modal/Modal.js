import React from 'react';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';
const Modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} onClick={props.modalClose} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0) ' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;

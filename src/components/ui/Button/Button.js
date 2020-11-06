import classes from '*.module.css';
import React from 'react';

const Button = (props) => (
  <button
    onClick={props.clickHandler}
    className={[classes.Button, classes[props.btnType]].join(' ')}
  >
    {props.children}
  </button>
);

export default Button;

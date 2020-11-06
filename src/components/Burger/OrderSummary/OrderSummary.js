import React from 'react';
import Aux from '../../../hoc/Aux';
// import classes from './OrderSummary.module.css'
const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your order</h3>
      <ul>{ingredientSummary}</ul>
      Continue to Checkout?
    </Aux>
  );
};

export default OrderSummary;

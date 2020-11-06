import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../ui/Button/Button';
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
      <p>
        <strong>Total Price :</strong>
        {props.totalPrice}
      </p>
      Continue to Checkout?
      <div>
        <Button btnType="Success" clickHandler={props.continuePurchase}>
          Continue
        </Button>
        <Button btnType="Danger" clickHandler={props.cancelPurchase}>
          Cancel
        </Button>
      </div>
    </Aux>
  );
};

export default OrderSummary;

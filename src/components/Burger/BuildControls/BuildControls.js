import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
];
const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        <strong>{props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            type={ctrl.type}
            key={ctrl.label}
            add={() => props.addIngredient(ctrl.type)}
            Label={ctrl.label}
            remove={() => props.removeIngredient(ctrl.type)}
          />
        );
      })}
      <button
        disabled={!props.canPurchase}
        onClick={props.ordered}
        className={classes.OrderButton}
      >
        Order!
      </button>
    </div>
  );
};

export default BuildControls;

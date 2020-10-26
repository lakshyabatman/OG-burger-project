import React from 'react'
import classes from './BurgerIngredient.module.css'
const BurgerIngredient = (props) => {

  let ingredient = null;
  switch(props.type) {
      case ('bread-top'):
        ingredient = <div className={classes.BreadTop}></div>
        break;
      case('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>
        break;
      case('seeds-1'):
        ingredient = <div className={classes.Seeds1}></div>
        break;
      case('seeds-2'):
        ingredient = <div className={classes.Seeds2}></div>
        break;
      case('meat'):
        ingredient = <div className={classes.Meat}></div>
        break;
      case('cheese'):
        ingredient = <div className={classes.Cheese}></div>
        break;
      case('salad'):
        ingredient = <div className={classes.Salad}></div>
        break;
      case('bacon'):
        ingredient = <div className={classes.Bacon}></div>
        break;
      default:
        ingredient = null;
    
  }
  return (
    <div>
      {ingredient}
    </div>
  )
}

export default BurgerIngredient

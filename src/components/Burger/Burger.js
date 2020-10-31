import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const Burger = (props) => {
  let transformedIngedients = Object.keys(props.ingredients)
  .map((igKey)=> {
      return [...Array(props.ingredients[igKey])].map((_,i) => <BurgerIngredient type={igKey} key={igKey+i} />);
  })
  .reduce((arr,el) => {
    return arr.concat(el)
  },[])
  if(transformedIngedients.length === 0) {
    transformedIngedients = <p>Please add ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngedients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}


export default Burger;
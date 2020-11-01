import React, {Component} from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import Modal from '../../components/ui/Modal/Modal'
import Aux from '../../hoc/Aux'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
 
const INGREDIENT_PRICES = {
  salad:0.5,
  cheese:0.4,
  meat:1,
  bacon:0.7
}
class BurgerBuilder extends Component {
  state = {
    ingredients : {
      salad:0,
      cheese:0,
      meat:0,
      bacon:0
    },
    total:4.0,
    purchasable:false,
    purchasing:false
  }

  purchaseHandler = () => {
    this.setState({purchasing:true})
  }
  canPurchase(ingredients) {
    const totalNumber = Object.keys(ingredients).map((ig) => ingredients[ig]).reduce((arr,el) => arr+el,0);
    this.setState({purchasable: totalNumber>0});
  }
  addIngredientHandler = (type) => {
    let count = this.state.ingredients[type] ;
    count++;
    let updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type]=count;
    let totalPrice = this.state.total;
    totalPrice+= INGREDIENT_PRICES[type];
    this.setState({ingredients:updatedIngredients, total:totalPrice });
    this.canPurchase(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    let count = this.state.ingredients[type]  ;
    if(count<=0 || count === undefined) return;
    count--;
    let updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type]=count;
    let totalPrice = this.state.total;
    totalPrice-= INGREDIENT_PRICES[type];
    this.setState({ingredients:updatedIngredients, total:totalPrice });
    this.canPurchase(updatedIngredients);

  }

  render() {
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal >
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
        addIngredient={this.addIngredientHandler}
        removeIngredient={this.removeIngredientHandler}
        totalPrice={this.state.total}
        canPurchase={this.state.purchasable}
        ordered={this.purchaseHandler}
        />
      </Aux>
    )
  }

}

export default BurgerBuilder

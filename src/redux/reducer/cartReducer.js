import { ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILED } from '../action/cartAction';


const initialState = {
  items: [],
  inCart: true,
  total: 0
}
export default (state = initialState, action) =>{
  switch(action.type) {
    case ADD_TO_CART_SUCCESS:
    let newState = [...state, action.payload];
    console.log("new state ", newState);
    let newTotal = 0;
    newState.forEach(item =>{
      let price = item.price;
      price = parseFloat(price.slice(1, 2) + price.slice(3))
      console.log("price", price)
      newTotal += price
    });

    newState.total = newTotal;
    console.log("Total", newState.total)
    return newState
    default:
    return state
  }
}

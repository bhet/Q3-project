import React from 'react';
import CartItem from './cartItem';
import { connect } from 'react-redux';


class Cart extends React.Component{
  render (){
    console.log("Props in cart", this.props)
    let listOfCartItems = this.props.items.map(item =><CartItem key={item.id} item={item}/>)
    return (
      <div>{listOfCartItems}</div>
    )
  }
}

const mapStateToProps = state =>({
  items: state.cameras.cameras.filter(camera => camera.inCart)
})

export default connect(mapStateToProps)(Cart);

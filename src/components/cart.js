import React from 'react';
import CartItem from './cartItem';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

class Cart extends React.Component{
  render (){
    console.log("Props in cart", this.props)
    let listOfCartItems = this.props.items.map(item =><CartItem key={item.id} item={item}/>)
    return (
      <div>
    <Table>
      <thead>
        <tr>
          <th>Your Cart</th>
        </tr>
      </thead>
        <tbody>
          {this.props.items.map(item =>
            <tr key={item.id}>
              <td>{item.name}</td>
            </tr>
          )}
        </tbody>
    </Table>

    {listOfCartItems}
  </div>

    )
  }
}

const mapStateToProps = state =>({
  items: state.cameras.cameras.filter(camera => camera.inCart),
  total: state.cartItems.total
})

export default connect(mapStateToProps)(Cart);

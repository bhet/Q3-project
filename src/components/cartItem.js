import React from 'react';
import { Table } from 'reactstrap';

const CartItem = (props)=>{
  console.log("Props in cartItem", props)
  return (
    <div>
  <div>
  </div>
  <div>
  </div>
  <Table hover>
    <tbody>
      <tr>
        <td>Subtotal: </td>
        <td>Tax: </td>
        <td>Total: </td>
      </tr>
    </tbody>
  </Table>
</div>

  )


}

export default CartItem;

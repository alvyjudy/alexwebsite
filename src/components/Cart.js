import React from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';



const Cart = () => {
  const items = useSelector(state => state);
  return <CartView items={items}/>
}

export default Cart;
import React, {useState} from 'react';
import itemsCatalog from "../itemsInfo.json";
import styles from "../stylesheets/Cart.module.css";
import {useDispatch, useSelector} from "react-redux";
import {rmItemFromCart, adjustItemCount} from "../states/cart.actions";

const arrayToObj = (array, key) => {
  return array.reduce(
    (obj, item) => {
      obj[item[key]] = item
      return obj
    }, {})
}

const itemCatalogObj = arrayToObj(itemsCatalog, 'itemID');

export const CartView = () => {
  const items = useSelector(state => state.cart);
  const itemsJSX = Object.values(items).map(
    (item) => {
      return <Item 
        key={item.itemID}
        itemID={item.itemID}
        />;
      }
  );

  return <div className={styles.cart}>
      <p className={styles.cartTitle}>Shopping Cart</p>
      {itemsJSX.length === 0 ? <p className={styles.cartTitle}>Your Shopping Cart is empty</p> : undefined}

      <div className={styles.Container}>{itemsJSX}</div>
    </div>
  
}


export const Item = ({itemID}) => {
  const dispatch = useDispatch();
  const state = useSelector(state=>state.cart[itemID])
  const {title, url, price} = itemCatalogObj[itemID];
  const count = state.itemCount;

  return (
    <div className={styles.cartItem}>
      <input type="checkbox" className={styles.itemCheckbox} />
      <img className={styles.cartItemImage} src={url} />
      <p className={styles.itemTitle}>{title}</p>
      <p className={styles.itemPrice}>{price} $CAD</p>

      <div className={styles.itemQuantityBox}>
        <p className={styles.itemCount}>Qty: {count}</p>

        <button className={styles.itemCountButAdd}
        onClick={()=>{
          dispatch(adjustItemCount(itemID, 1))
        }}>+</button>

        <button className={styles.itemCountButMinus}
        onClick={()=>{
          dispatch(adjustItemCount(itemID, -1))
        }}>-</button>

        <button className={styles.removeBut}
        onClick={()=>{
          dispatch(rmItemFromCart(itemID))
        }}>Remove</button>
      
      </div>

      
    </div>
  )
}

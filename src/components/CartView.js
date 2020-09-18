import React from 'react';
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

export const CartView = () => {
  const items = useSelector(state => state.cart);
  const itemsJSX = Object.values(items).map(
    (item) => {
      const itemMeta = arrayToObj(itemsCatalog, 'itemID')[item.itemID];
      return <Item 
        key={item.itemID}
        itemID={item.itemID}
        title={itemMeta.title}
        url={itemMeta.url}
        count={item.itemCount}
        />;
      }
  );
  return <div className={styles.Container}>{itemsJSX}</div>
}


export const Item = ({itemID, url, count}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cartItem}>
      <img className={styles.cartItemImage} src={url} />
      <p>{count}</p>
      <button onClick={()=>{
        dispatch(adjustItemCount(itemID, 1))
      }}>+</button>
      <button onClick={()=>{
        dispatch(adjustItemCount(itemID, -1))
      }}>-</button>
      <button onClick={()=>{
        dispatch(rmItemFromCart(itemID))
      }}>Remove</button>
    </div>
  )
}

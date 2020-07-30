import React from 'react';
import itemsCatalog from "../itemsInfo.json";
import styles from "../stylesheets/Cart.module.css";
import {useDispatch, useSelector} from "react-redux";
import {rmItemFromCart, adjustItemCount} from "../states/actions.js";

const arrayToObj = (array, key) => {
  return array.reduce(
    (obj, item) => {
      obj[item[key]] = item
      return obj
    }, {})
}



const itemsCatalogObj = arrayToObj(itemsCatalog, 'filename')

const CartView = () => {
  const items = useSelector(state => state);
  const itemsArr = Object.values(items);
  const itemsJSX = itemsArr.map(
    (item, i) => {
      const itemMeta = itemsCatalogObj[item.itemName]
      return (<Item 
        key={i}
        title={itemMeta.title}
        url={itemMeta.url}
        count={item.itemCount}
        filename={item.itemName}
        />);
      }
  );
  return <div className={styles.Container}>{itemsJSX}</div>
}


const Item = ({title, url, count, filename}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cartItem}>
      <img className={styles.cartItemImage} src={url} />
      <p>{count}</p>
      <button onClick={()=>{
        dispatch(adjustItemCount(filename, 1))
      }}>+</button>
      <button onClick={()=>{
        dispatch(adjustItemCount(filename, -1))
      }}>-</button>
      <button onClick={()=>{
        dispatch(rmItemFromCart(filename))
      }}>Remove</button>
    </div>
  )
}

export default CartView
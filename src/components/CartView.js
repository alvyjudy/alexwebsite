import React, {useState} from 'react';
import itemsCatalog from "../itemsInfo.json";
import styles from "../stylesheets/Cart.module.css";
import {useDispatch, useSelector} from "react-redux";
import {
  rmItemFromCart, 
  adjustItemCount,
  uncheckItem,
  checkItem,
} from "../states/cart.actions";

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

  const subtotal = Object.values(items).reduce(
    (accu, item) => {
      const itemPrice = itemCatalogObj[item.itemID].price * item.itemCount
      return accu + (item.checked ? itemPrice : 0)
    }, 0
  )
  
  const itemToCheckout = Object.values(items).filter(
    item=>item.checked
  )

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

      {itemsJSX.length === 0 ? 
        <p className={styles.cartSubTitle}>Your Shopping Cart is empty</p> : 
        <p className={styles.cartSubTitle}>Subtotal: {subtotal} CAD$</p>
      }

      <button 
        className={styles.checkoutBut}
        onClick={(e)=>{
          e.preventDefault();
          console.log(itemToCheckout)

        }}
      >Checkout</button>

      <div className={styles.Container}>{itemsJSX}</div>
    </div>
  
}


export const Item = ({itemID}) => {
  const dispatch = useDispatch();
  const itemState = useSelector(state=>state.cart[itemID])

  const {title, url, price} = itemCatalogObj[itemID];
  const count = itemState.itemCount;
  const checked = itemState.checked;

  const [removed, setRemove] = useState(false);

  return (
    <div className={removed ? styles.cartItemRemoved : styles.cartItem}>

      <input 
        type="checkbox" 
        checked={checked}
        className={styles.itemCheckbox} 
        onChange={(e)=>{dispatch(
          e.target.checked !== false ? 
          checkItem(itemID) : 
          uncheckItem(itemID)
        )}}/>

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
          setRemove(true)
          setTimeout(()=>{dispatch(rmItemFromCart(itemID))}, 500)
        }}>Remove</button>
      
      </div>

      
    </div>
  )
}

import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styles from '../stylesheets/ItemContainer.module.css';


class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log('cart:', this.props.cartItems);
    let itemList = this.props.cartItems;
    let allItems = itemList.map(
      (imgObj, i) => {
        return (
          <div className={styles.ItemCard}>
            <img
              className={styles.ItemImage}
              src={imgObj.url}
              alt='image failed to load'
            />
            <p className={styles.ItemTitle}>Item title 4.99$</p>
            <button
              className={styles.Button}
              type='button'
              onClick={() => {this.props.removeItemFromCart(imgObj)}}
              >Remove</button>
          </div>
        )
      }
    )
    return(
      <div className={styles.ItemContainer}>
        {allItems}
      </div>
    )

  }
}


export default Cart;

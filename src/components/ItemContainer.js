import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';
import Contact from './Contact.js';
import styles from '../stylesheets/ItemContainer.module.css'
import itemsMeta from "../itemsInfo.json";
/*
itemsMeta
[
  {
    "filename":"",
    "title":"",
    "category":"",
    "description":"",
    "price":Float
  },
  ...
]
*/


class ItemContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.content) {
      case "categories":
        return this.renderCategoryView();
      case "aboutus":
        return this.renderAboutUs();
      case "contact":
        return this.renderContact();
      case "cart":
        return this.renderCart();
      default:
        return this.renderItems();
    }
  }

  renderCategoryView() {
    let category = this.props.content;
    let items = [];
    itemsMeta.forEach(item => {
      if (item['category'] === category) {
        items.push(item);
      }
    });
    let allItems = items.map(
      (item, i) => {
        return (
          <Link to={`/items/${item.title}`} className={styles.Category}>
            <p className={styles.TextInPic}>
              {item.title}
            </p>
            <img src={item.url} className={styles.Image} />
          </Link>
        )
      }
    );
    return (
      <div className={styles.CategoryContainer}>
        {allItems}
      </div>
    )


  }

  renderAboutUs() {
    return <div>Hello about us</div>
  }

  renderContact() {
    return <div>
    <Contact />
    </div>
  }

  renderItems() {
    let category = this.props.content;
    let items = [];
    itemsMeta.forEach(item => {
      if (item['category'] === category) {
        items.push(item);
      }
    });
    let allItems = items.map(
      (item, i) => {
        return (
          <div className={styles.ItemCard}>
            <img
              className={styles.ItemImage}
              src={item.url}
              alt='image failed to load'
            />
            <p className={styles.ItemTitle}>{`${item.title} CAD$${item.price}`}</p>
            <button
              className={styles.Button}
              onClick={()=>{this.renderItem(item)}}>
              Another button
            </button>
            <button
              className={styles.Button}
              type='button'
              onClick={() => {this.props.addItemToCart(item)}}>
              Add to cart
            </button>
          </div>
        );
      }
    );
    return (
      <div className={styles.ItemContainer}>
        {allItems}
      </div>
    );
  }

  renderItem(item) {

  }

  renderCart() { //this.props.cart is the App state
    let cart = this.props.cart;
    let itemList = cart.cartItems;
    let subtotal = 0;
    itemList.forEach((item, i) => {
      subtotal += item.price;
    });
    let allItems = itemList.map(
      (item, i) => {
        return (
          <div className={styles.cartItem}>

            <img
              className={styles.cartItemImage}
              src={item.url}
              alt='image failed to load'
            />

            <p className={styles.ItemTitle}>
              {`${item.title} Price: CAD$${item.price}`}
            </p>

            <button
              className={styles.Button}
              type='button'
              onClick={() => {this.props.removeItemFromCart(item)}}
              >Remove</button>

          </div>
        )
      }
    );
    return(
      <div className={styles.cart}>

        <div className={styles.cartHeader}>

          <div className={styles.cartSum}>
            {`You have ${cart.cartItems.length} items in your cart`}
          </div>

          <div className={styles.cartSum}>
            {`Subtotal: CAD$${subtotal}`}
          </div>

          <button
            className={styles.Button}
            >
            Proceed to checkout
          </button>
        </div>


        <div className={styles.cartContainer}>
          {allItems}
        </div>

      </div>
    );
  }
}


export default ItemContainer;

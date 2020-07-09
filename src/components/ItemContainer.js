import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';
import Contact from './Contact.js';
import styles from '../stylesheets/ItemContainer.module.css';
import mediaIndex from "../mediaIndex.json";
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
      case "top":
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
    let imgList = mediaIndex.categories;
    let allItems = imgList.map(
      (imgObj, i) => {
        return (
          <Link to={`/items/${imgObj.name}`} className={styles.Category}>
            <p className={styles.TextInPic}>
              {imgObj.name}
            </p>
            <img src={imgObj.url} className={styles.Image} />
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
    console.log('cart total', subtotal);
    let allItems = itemList.map(
      (item, i) => {
        return (
          <div className={styles.cartItem}>
            <img
              className={styles.cartItemImage}
              src={item.url}
              alt='image failed to load'
            />
            <p className={styles.ItemTitle}>Item title 4.99$</p>
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
          {`You have ${cart.cartItems.length} items in your cart`}
        </div>
        <div className={styles.cartHeader}>
          {`Subtotal: CAD$${subtotal}`}
        </div>

        <div className={styles.cartContainer}>
          {allItems}
        </div>
      </div>
    );
  }
}


export default ItemContainer;

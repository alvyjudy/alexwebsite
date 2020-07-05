import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link, useParams, Redirect } from 'react-router-dom';
import Contact from './Contact.js';
import styles from '../stylesheets/ItemContainer.module.css';
import mediaIndex from '../mediaIndex.json';

let savedObj = ["https://storage.googleapis.com/steeplehill/keychain/keychain1.jpg"];

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
      case "login":
        return this.login();
      default:
        return this.renderItems();
    }
  }

  renderCategoryView() {
    let imgList = mediaIndex.categories;
    let allItems = imgList.map(
      (imgObj, i) => {
        return (
          <Item
            imgfile={imgObj.url}
            key={i}
            theme='category'
            category={imgObj.name}
          />
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
    let imgList = mediaIndex[category];
    let allItems = imgList.map(
      (imgObj, i) => {
        return (
          <Item
            imgfile={imgObj.url}
            title={imgObj.name}
            key={i}
            theme='items'
          />)
      }
    )
    return (
      <div className={styles.ItemContainer}>
        {allItems}
      </div>
    );
  }

  renderCart() {
    let imgList = savedObj;
    console.log(savedObj)
    let allItems = imgList.map(
      (imgObj, i) => {
        return (
          <div className={styles.ItemCard}>
            <img className={styles.ItemImage} src={imgObj} />
            <button className={styles.Button} type='button' onClick={() => savedObj = savedObj.filter(rm => imgObj != rm, this.forceUpdate())}>
              Remove from Cart
              </button>

          </div>
        )
      }
    )
    return (
      <div className={styles.ItemContainer}>
        {allItems}
      </div>
    );
  }

  login() {
    return (
      <div>
        <label>
          Name:
          <br></br>
          <input type="text" id="username" />
        </label>
        <br></br>
        <label>
          Password:
          <br></br>
          <input type="password" id="password" />
        </label>
        <br></br>
        <button onClick={() => {
          let req = new XMLHttpRequest();
          req.onreadystatechange = function () {
            if (this.readyState === 4) {
              //redirect
              console.log(this.response);
            }
          };
          req.open("POST", "/login");
          req.setRequestHeader("Content-Type", "application/json");
          req.send(JSON.stringify([document.getElementById('username').value, document.getElementById('password').value]));
        }}>
          Login
        </button>
      </div>
    )
  }
}



class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.theme) {
      case "category":
        return this.generateCategory();
      case "items":
        return this.generateItem();
    }
  }

  generateCategory() {
    return (
      <Link to={`/items/${this.props.category}`} className={styles.Category}>
        <p className={styles.TextInPic}>
          {this.props.category}
        </p>
        <img src={this.props.imgfile} className={styles.Image} />
      </Link>
    )
  }

  generateItem() {
    return (
      <div className={styles.ItemCard} >
        <img
          className={styles.ItemImage}
          src={this.props.imgfile}
          alt='image failed to load'
        />
        <p className={styles.ItemTitle}>Item title 4.99$</p>
        <button className={styles.Button} >Another button</button>
        <button className={styles.Button} type='button' onClick={
          () => savedObj.push(this.props.imgfile)
        }>Add to cart</button>
      </div>
    )
  }
}



export default ItemContainer;
export { Item };

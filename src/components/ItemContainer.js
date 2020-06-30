import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';
import Contact from './Contact.js';
import styles from '../stylesheets/ItemContainer.module.css';
import mediaIndex from '../mediaIndex.json';


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
            imgfile = {imgObj.url}
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
    console.log(imgList);
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
}



class Item extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.theme) {
      case "category":
        return this.renderCategory();
      case "items":
        return this.renderItems();
    }
  }

  renderCategory() {
    return (
        <Link to={`/items/${this.props.category}`} className={styles.Category}>
          <p className={styles.TextInPic}>
            {this.props.category}
          </p>
          <img src={this.props.imgfile} className={styles.Image} />
        </Link>
    )
  }

  renderItems() {
    return (
      <div className={styles.ItemCard}>
        <img
          className={styles.ItemImage}
          src={this.props.imgfile}
          alt='image failed to load'
        />
        <p className={styles.ItemTitle}>Item title 4.99$</p>
        <button className={styles.Button}>Another button</button>
        <button className={styles.Button} type='button' >Add to cart</button>
      </div>
    )
  }
}



export default ItemContainer;
export { Item };

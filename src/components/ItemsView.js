import React, {useState} from 'react';
import styles from "../stylesheets/ItemsView.module.css";
import itemsCatalog from "../itemsInfo.json";
import {Link, useParams} from "react-router-dom";
import {addItemToCart} from "../states/cart.actions";
import {useDispatch, useSelector} from "react-redux";

export const OneItem = (props) => {
  const targetLink = "/item/" + props.itemID;
  const dispatch = props.dispatch || (()=>{console.log("UI mode")})
  const itemID = props.itemID;
  const addedToCart = useSelector(state=>state.cart)[itemID] ? true : false;
  return (
    <div className={styles.ItemCard}>

      <img
        className={styles.ItemImage}
        src={props.url}
        alt='image failed to load'/>

      <div className={styles.ItemContent}>

        <Link className={styles.ItemTitle}
          to={targetLink}>
            {props.title}
        </Link>

        <p className={styles.ItemPrice}>
          {`${props.price} CAD$`}
        </p>

        <button className={addedToCart? styles.ButtonClicked : styles.Button}
          onClick={(e)=>{
            e.preventDefault;
            dispatch(addItemToCart(props.itemID));
          }}>
            {addedToCart ? "added to cart" : "add to cart"}
          </button>

      </div>
    </div>
  );
}

export const ItemsView = (props) => {
  const category = useParams().category || props.category;
  console.log("category:", category);
  const dispatch = useDispatch();
  const itemsSubset = itemsCatalog.filter(
    item => item["category"] === category
  );
  const itemsJSX = itemsSubset.map(
    item => <OneItem 
      key={item.itemID} 
      dispatch={dispatch}
      {...item} />
  );
  return <div className={styles.Container}>{itemsJSX}</div>
}




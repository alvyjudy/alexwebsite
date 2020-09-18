import React, {useState} from 'react';
import styles from "../stylesheets/ItemsView.module.css";
import itemsCatalog from "../itemsInfo.json";
import {Link, useParams} from "react-router-dom";
import {addItemToCart} from "../states/cart.actions";
import {useDispatch} from "react-redux";

export const OneItem = (props) => {
  const targetLink = "/item/" + props.itemID;
  const dispatch = props.dispatch || (()=>{console.log("UI mode")})
  const [clicked, setClicked] = useState(false)
  return (
    <div className={styles.ItemCard}>

      <img
        className={styles.ItemImage}
        src={props.url}
        alt='image failed to load'/>

      <Link className={styles.ItemTitle}
         to={targetLink}>
          {props.title}
      </Link>

      <p className={styles.ItemTitle}>
        {`${props.price} CAD$`}
      </p>

      <p className={styles.ItemTitle}>
        {`${props.description}`}
      </p>

      <button className={clicked? styles.ButtonClicked : styles.Button}
        onClick={(e)=>{
          e.preventDefault;
          dispatch(addItemToCart(props.itemID));
          setClicked(true);
        }}>
          {clicked ? "added to cart" : "add to cart"}
        </button>


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




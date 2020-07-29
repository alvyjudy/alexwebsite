import React from 'react';
import styles from "../stylesheets/ItemsView.module.css";
import itemsCatalog from "../itemsInfo.json";
import createLinkTo from "./CreateLinkTo.js";

const ItemsView = ({pathUpdator, category}) => {
  const itemsSubset = itemsCatalog.filter(
    (item) => {return item["category"] === category;}
  );
  const itemsJSX = itemsSubset.map(
    (item, i) => { return <OneItem
      pathUpdator={pathUpdator}
      item={item} 
      key={i}/>;}
  );
  return (
    <div className={styles.Container}>
      {itemsJSX}
    </div>);
}

const OneItem = ({pathUpdator, item }) => {
  const targetLink = "/item/" + item.title;
  return (
    <div className={styles.ItemCard}>

      <img
        className={styles.ItemImage}
        src={item.url}
        alt='image failed to load'/>

      <a className={styles.ItemTitle}
         onClick={createLinkTo(targetLink, pathUpdator)}>
          {`${item.title}`}
      </a>

      <p className={styles.ItemTitle}>
        {`${item.price} CAD$`}
      </p>

      <p className={styles.ItemTitle}>
        {`${item.description}`}
      </p>


    </div>
  );
}

export default ItemsView;

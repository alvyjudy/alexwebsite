import React, {useContext} from 'react';
import styles from "../stylesheets/OneCategoryStyle.module.css";
import itemsCatalog from "../itemsInfo.json";
import {Link} from "react-router-dom";

const CategoriesView = ({}) => {
  const itemsSubset = itemsCatalog.filter(
    (item) => {return item["category"] === "categories"}
  );
  const itemsJSX = itemsSubset.map(
    (item, i) => {return <OneCategory
      item={item}
      key={i} />;}
  );
  return (
    <div className={styles.Container}>
      {itemsJSX}
    </div>
  );
}

const OneCategory = ({item}) => {
  const targetLink = "/items/" + item.title;
  return (
    <Link to={targetLink}
      className={styles.Category}
    >
      <p className={styles.TextInPic}>
        {item.title}
      </p>
      <img src={item.url} className={styles.Image} />
    </Link>
  );
}

export default CategoriesView;

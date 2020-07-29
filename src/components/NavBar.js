import React from 'react';
import createLinkTo from "./CreateLinkTo.js";
import styles from "../stylesheets/NavBar.module.css";

const NavBar = ({ pathUpdator }) => {
  return (
    <div className={styles.Container}>
      <a className={styles.NavBarItem} onClick={createLinkTo("/", pathUpdator)}>Home</a>
      <a className={styles.NavBarItem} onClick={createLinkTo("/cart", pathUpdator)}>Cart</a>
      <a className={styles.NavBarItem} onClick={createLinkTo("/aboutus", pathUpdator)}>About</a>
      <a className={styles.NavBarItem} onClick={createLinkTo("/contact", pathUpdator)}>Contact</a>
    </div>
  )
}

export default NavBar;

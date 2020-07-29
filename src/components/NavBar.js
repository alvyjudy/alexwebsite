import React from 'react';
import createLinkTo from "./CreateLinkTo.js";
import styles from "../stylesheets/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.Container}>
      <Link className={styles.NavBarItem} to="/">Home</Link>
      <Link className={styles.NavBarItem} to="/cart">Cart</Link>
      <Link className={styles.NavBarItem} to="/about">About</Link>
      <Link className={styles.NavBarItem} to="/contact">Contact</Link>
    </div>
  )
}

export default NavBar;

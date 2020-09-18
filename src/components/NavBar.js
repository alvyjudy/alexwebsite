import React, {useState} from 'react';
import styles from "../stylesheets/NavBar.module.css";
import { Link } from "react-router-dom";


export const LoggedInNavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
  <div className={styles.Container}>
      <Link className={styles.NavBarItem} to="/">Home</Link>
      <Link className={styles.NavBarItem} to="/cart">Cart</Link>
      <div className={styles.NavBarItemIcon} onClick={
        ()=>{setDropdown(dropdown? false : true)}
        }>UserIcon
      </div>
      
      <div className={dropdown? styles.DropdownActive : styles.Dropdown}>
        <Link className={styles.NavBarItem} to="/profile">profile</Link>
        <div className={styles.NavBarItem} to="/logout">log out</div>
      </div> 

      
      
    </div>)
}


export const LoggedOutNavBar = () => {
  return (
    <div className={styles.Container}>
      <Link className={styles.NavBarItem} to="/">Home</Link>
      <Link className={styles.NavBarItem} to="/cart">Cart</Link>
      <Link className={styles.NavBarItem} to='/login'>Login/Signup</Link>
    </div>
    
  )
}


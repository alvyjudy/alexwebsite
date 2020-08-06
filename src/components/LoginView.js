import React from "react";
import styles from "../stylesheets/LoginView.module.css";

const Login = () => {
  return <form className={styles.form}>
    <input type="text" placeholder="Enter Username" name="uname" required />
    <input type="text" placeholder="Enter password" name="pw" required />
    <button onClick={}>Login</button>
  </form>
}
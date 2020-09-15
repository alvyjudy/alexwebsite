import React, {useState} from "react";
import styles from "../stylesheets/LoginView.module.css";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
const BACKEND = "http://localhost:3002";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [passphrase, setPassphrase] = useState("x");

  const authenticateByInput = () => {
    console.log(email);
    console.log(passphrase);

    axios({
      url: BACKEND+"/api/login",
      method: "post",
      headers: {"Content-Type":"Application/json"},
      data: {email, passphrase}, 
    })
    .then(
      (response)=>{
        if (response.data.status === 200) {
          return "authenticated"
        } else {
          throw "authentication failed"
        }
      },
      (error) => {console.log("Request Error", error)}
    )
    .then(
      () => {
        //authenticated
        dispatch()
        history.push("/");
      },
      () => {
        //authentication failed
      }

    )
    
  }
  
  return <form className={styles.form} onSubmit={(e)=>{e.preventDefault()}}>
    <div className={styles.topTitle}>User Login</div>
    <input className={styles.inputField} 
      type="text" 
      placeholder="Enter Username" 
      required 
      onChange={e=>{setEmail(e.target.value)}}
      />
    <input 
      className={styles.inputField} 
      type="password" 
      placeholder="Enter password"
      required 
      onChange={e=>{setPassphrase(e.target.value)}}
      />
    <button className={styles.loginBut} onClick={authenticateByInput}>Login</button>
    <Link to="/register">Sign up here</Link>
  </form>
}



export default Login;
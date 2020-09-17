import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import styles from "../stylesheets/LoginView.module.css";
import {loginUser, registerUser} from "../states/auth.thunk";


export const LoginUI = (props) => {
  //user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("x");

  //login or register?
  const [loginMode, setMode] = useState(true);

  //actions defined in parent
  const dispatch = props.dispatch;
  const action = loginMode ? props.loginUser : props.registerUser
  
  return (
    <form className={styles.form} 
      onSubmit={(e)=>{
        e.preventDefault()
        dispatch(action(email, password))
      }}>

      <div className={styles.topTitle}>{loginMode ? "Login" : "Register"}</div>
      
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
        onChange={e=>{setPassword(e.target.value)}}
        />

      <input className={styles.loginBut} type="submit" value={
        loginMode? "Login" : "Register"} />

      <button className={styles.forgetOrRegister} onClick={(e)=>{
        e.preventDefault();
        setMode(!loginMode);
      }}>{loginMode ? "Register" : "Login"}</button>

      <button className={styles.forgetOrRegister} onClick={(e)=>{
        e.preventDefault();
      }}>Forgot password?</button>

    </form> )
}

export const Login = (props) => {
  const dispatch = useDispatch();
  const {
    authenticated,
    inProgress,
    registered,
  } = useSelector(state=>state.auth);
  
  return <LoginUI 
    dispatch={dispatch}
    loginUser={loginUser}
    registerUser={registerUser}
    />
}

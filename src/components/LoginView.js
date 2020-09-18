import React, {useState} from "react";
import {Link, useHistory, Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import styles from "../stylesheets/LoginView.module.css";
import {loginUser, registerUser} from "../states/auth.thunk";


export const LoginUI = (props) => {
  //user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("x");

  //mode
  const [loginMode, setMode] = useState(true);
  const inProgress = props.inProgress;
  const loggedIn = props.loggedIn;
  const registered = props.registered;
  const errorMsg = props.errorMsg;

  //actions defined in parent
  const dispatch = props.dispatch 
    || (()=>{console.log("pure UI mode")});
  const action = (loginMode ? props.loginUser : props.registerUser) 
    || (()=>{console.log("pure UI mode")});
  const history=props.history || (()=>{console.log("pure UI mode")})
  
  if (loggedIn) {
    return <div>logged in<Redirect to='/'/></div>
  } else if (registered) {
    history.push("/")
    return <div>registered</div>
  } else {
    return (
    <form className={styles.form}>

      <div className={styles.topTitle}>{loginMode ? "Login" : "Register"}</div>
      
      <input className={styles.inputField} 
        type="text" 
        placeholder="Enter Username" 
        /*required*/
        onChange={e=>{setEmail(e.target.value)}}
        />

      <input 
        className={styles.inputField} 
        type="password" 
        placeholder="Enter password"
        /*required*/ 
        onChange={e=>{setPassword(e.target.value)}}
        />
      
      {(errorMsg && !inProgress) ? <div>{props.errorMsg} or invalid credential</div> : undefined}

      <button 
        className={styles.loginBut} 
        onClick={(e)=>{
          e.preventDefault();
          dispatch(action(email, password))
        }}>
        {
          inProgress ? <div>In Progress...</div> :
          loginMode ? "Login" : "Register"
        }
      </button>

      <button className={styles.forgetOrRegister} onClick={(e)=>{
        e.preventDefault();
        setMode(!loginMode);
      }}>{loginMode ? "Register" : "Login"}</button>

      <button className={styles.forgetOrRegister} onClick={(e)=>{
        e.preventDefault();
      }}>Forgot password?</button>

    </form> )}
}

export const Login = (props) => {
  const dispatch = useDispatch();
  const {
    loggedIn,
    inProgress,
    registered,
    errorMsg,
  } = useSelector(state=>state.auth);
  const history = useHistory();
  
  console.log("inProgress?", inProgress)
  console.log("loggedIn?", loggedIn);
  console.log("errormsg", errorMsg);
  
  
  return <LoginUI 
    dispatch={dispatch}
    loginUser={loginUser}
    registerUser={registerUser}
    inProgress={inProgress}
    loggedIn={loggedIn}
    errorMsg={errorMsg}
    history={history}
    />
}

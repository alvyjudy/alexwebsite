const BACKEND = process.env.APIENDPOINT || (window.location.host + '/api')
console.log("Backend address:", BACKEND)

import axios from "axios";

import {
  inProgress,
  loginSucceed,
  loginFail
} from "./auth.actions";



export const loginUser = (email, password) => async dispatch => {
  dispatch(inProgress())
  console.log("dispatching, endpoint:", BACKEND)
  await axios({
    baseURL: "https://",
    url: BACKEND + "/login",
    method: "post",
    timeout: 5000,
    data:{
      email,
      password
    }
  })
  .then(response=>{
    const status = response.status;
    const userId = response.data.userId; //change backend "ID" to "Id"
    const tokenValue = response.data.tokenValue;
    console.log('login success')
    dispatch(loginSucceed(userId, tokenValue))
  })
  .catch(e=>{
    dispatch(loginFail("Error in authenticating"))
  })
}

export const registerUser = () => {
  return {name:'register'}
}
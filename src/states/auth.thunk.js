import axios from "axios";

import {
  loginInProgress,
  loginSucceed,
  loginFail
} from "./auth.actions";

const BACKEND = process.env.APIENDPOINT;

export const loginUser = (email, password) => async dispatch => {
  dispatch(loginInProgress())
  
  await axios({
    url: BACKEND + "/login",
    method: "post",
    data:{
      email,
      password
    }
  })
  .then(response=>{
    const status = response.status;
    const userId = response.data.userId; //change backend "ID" to "Id"
    const tokenValue = response.data.tokenValue;
    dispatch(loginSucceed(userId, tokenValue))
  })
  .catch(e=>{
    dispatch(loginFail("Error in authenticating"))
  })
}

export const registerUser = () => {
  return {name:'register'}
}
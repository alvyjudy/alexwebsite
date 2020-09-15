import axios from "axios";
const BACKEND = "http://localhost:3002"

//cart items
const addNewItem = (itemID) => {
  console.log('action called');
  return {type: "ADD_NEW_ITEM", itemID}
}
const rmItemFromCart = (itemID) => {
  return {type: "RM_ITEM_FROM_CART", itemID}
}

const adjustItemCount = (itemID, itemCount) => {
  return {type:"ADJUST_ITEM_COUNT", itemID, itemCount}
}


//authentication
const loginUser = (email, password) => async dispatch => {
  dispatch({type: "auth/loginUserStart"})
  
  
  axios({
    url: BACKEND + "/login",
    method: "post",
    data:{
      email,
      password
    }
  })
  .then(response => {
    response.status===200 ? 
    dispatch({type: "APPROVE_LOGIN", tokenValue: response.data.tokenValue}) :
    console.log('incorrect authentication');
  })
  .catch(console.log)
}

export default {
  cart: {
    addNewItem,
    rmItemFromCart,
    adjustItemCount
  },
  auth: {
    loginUser,
    registerUser
  }
}
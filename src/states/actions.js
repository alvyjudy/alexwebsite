import axios from "axios";
const BACKEND = "http://localhost:3002"

//cart items
export const addNewItem = (itemID) => {
  console.log('action called');
  return {type: "ADD_NEW_ITEM", itemID}
}

export const rmItemFromCart = (itemID) => {
  return {type: "RM_ITEM_FROM_CART", itemID}
}

export const adjustItemCount = (itemID, itemCount) => {
  return {type:"ADJUST_ITEM_COUNT", itemID, itemCount}
}


//authentication
export const loginUser = (email, passphrase) => dispatch => {
  axios({
    url: BACKEND + "/login",
    method: "post",
    data:{
      email,
      passphrase
    }
  })
  .then(response => {
    response.status===200 ? 
    dispatch({type: "APPROVE_LOGIN", token: response.data.token}) :
    console.log('incorrect authentication');
  })
  .catch(console.log)
}


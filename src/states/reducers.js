import {combineReducers} from "redux";


const cartItems = (state={}, action) => {
  switch (action.type) {
    case "ADD_NEW_ITEM":
      return {...state,
        [action.itemID]: {
          itemID: action.itemID,
          itemCount: 1}
        }

    case "RM_ITEM_FROM_CART":
      let newState = {...state};
      delete newState[action.itemID];
      return newState;
    
    case "ADJUST_ITEM_COUNT":
      console.log('item count adjust')
      newState = {...state};
      const oldCount = state[action.itemID]['itemCount'];
      const newCount = Math.max(1, oldCount + action.itemCount);
      newState[action.itemID]['itemCount'] = newCount;
      return newState;

    default: 
      return state;
  }
}

const initAuth = {
  authenticated: false,
  token:""
}

const auth = (state=initAuth, action) => {
  switch (action.type) {
    case "APPROVE_LOGIN":
      return {...state,
        authenticated: true,
        token: action.token}
    case "LOGOUT":
      return {...initAuth}
    default:
      return state;
  }
}

export default combineReducers({auth, cartItems});
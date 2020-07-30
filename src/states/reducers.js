import {combineReducers} from "redux";

const cartItems = (state={}, action) => {
  console.log('reduer call');
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

export default cartItems;
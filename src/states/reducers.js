import {combineReducers} from "redux";

const cartItems = (state={}, action) => {
  console.log('reduer call');
  switch (action.type) {
    case "ADD_NEW_ITEM":
      return {...state,
        [action.itemID]: {
          itemName: action.itemName,
          itemID: action.itemID,
          itemCount: 1}
        }
    case "RM_ITEM_FROM_CART":
      return state.filter(
        item => item.itemName !== action.itemName
      );
    case "ADJUST_ITEM_COUNT":
      const newState = [];
      let oldCount;
      state.forEach(
        item => { switch (item.itemName === action.itemName) {
                    case true:
                      oldCount = item.itemCount;
                    default:
                      newState.push(item);
                    }}
      );
      const newCount = Math.max(1, oldCount + action.itemCount);
      return [...newState,
        {itemName: action.itemName,
        itemCount: newCount}
      ]
    default: 
      return state;
  }
}

export default cartItems;
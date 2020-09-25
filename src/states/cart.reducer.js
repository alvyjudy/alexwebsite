import {
  ADD_ITEM_TO_CART,
  RM_ITEM_FROM_CART,
  ADJUST_ITEM_COUNT,
  UNCHECK_ITEM,
  CHECK_ITEM
} from "./cart.actions";

export const cart = (state={}, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {...state,
        [action.itemID]: {
          itemID: action.itemID,
          itemCount: 1,
          checked: true}
        }

    case RM_ITEM_FROM_CART:
      let newState = {...state};
      delete newState[action.itemID];
      return newState;
    
    case ADJUST_ITEM_COUNT:
      console.log('item count adjust')
      newState = {...state};
      const oldCount = state[action.itemID]['itemCount'];
      const newCount = Math.max(1, oldCount + action.itemCount);
      newState[action.itemID]['itemCount'] = newCount;
      return newState;

    case UNCHECK_ITEM:
      let item = state[action.itemID]
      return {...state,
        [action.itemID]:{
          ...item,
          checked: false
        }
      }
    
    case CHECK_ITEM:
      item = state[action.itemID]
      return {...state,
        [action.itemID]:{
          ...item,
          checked: true
        }
      }

    default: 
      return state;
  }
}

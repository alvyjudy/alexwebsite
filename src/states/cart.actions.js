export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const RM_ITEM_FROM_CART = "RM_ITEM_FROM_CART";
export const ADJUST_ITEM_COUNT = "ADJUST_ITEM_COUNT";
export const UNCHECK_ITEM = "UNCHECK_ITEM";
export const CHECK_ITEM = "CHECK_ITEM";

export const addItemToCart = (itemID) => {
  return {type: ADD_ITEM_TO_CART,itemID}
}

export const rmItemFromCart = (itemID) => {
  return {type: RM_ITEM_FROM_CART, itemID}
}

export const adjustItemCount = (itemID, itemCount) => {
  return {type:ADJUST_ITEM_COUNT, itemID, itemCount}
}

export const uncheckItem = (itemID) => {
  return {type: UNCHECK_ITEM, itemID}
}

export const checkItem = (itemID) => {
  return {type: CHECK_ITEM, itemID}
}

//actions



//action creator
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
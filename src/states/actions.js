//actions



//action creator
export const addNewItem = (itemName) => {
  console.log('action called');
  return {type: "ADD_NEW_ITEM", itemName}
}

export const rmItemFromCart = (itemName) => {
  return {type: "RM_ITEM_FROM_CART", itemName}
}

export const adjustItemCount = (itemName, itemCount) => {
  return {type:"ADJUST_ITEM_COUNT", itemName, itemCount}
}
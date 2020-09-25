const BACKEND = process.env.APIENDPOINT || (window.location.host + '/api')
console.log("Backend address:", BACKEND)

import {
  ADD_ITEM_TO_CART,
  RM_ITEM_FROM_CART,
  ADJUST_ITEM_COUNT,
} from "./cart.actions";


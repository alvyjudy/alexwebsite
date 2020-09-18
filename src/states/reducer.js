import {combineReducers} from "redux";

import {auth} from "./auth.reducer";
import {cart} from "./cart.reducer";

export const reducer = combineReducers({auth, cart});
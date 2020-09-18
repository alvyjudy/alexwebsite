import reducer from "../src/states/reducers";
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk))

test("", ()=>{
  const state = store.getState()
  expect(state.auth).toBeDefined()
  expect(state.cartItems).toBeDefined()
})
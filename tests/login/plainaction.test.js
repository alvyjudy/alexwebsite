//library
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

//app specific objects
import {reducer} from "../../src/states/reducer";
import {
  inProgress,
  loginSucceed,
  loginFail,
} from "../../src/states/auth.actions";



describe("test plain login actions", ()=>{
  let store;
  beforeEach(()=>{
    store = createStore(reducer, applyMiddleware(thunk))
  })

  it("inProgress", ()=>{
    expect(store.getState().auth.inProgress).toBe(false)
    store.dispatch(inProgress())
    expect(store.getState().auth.inProgress).toBe(true)
  })

  it("loginSucceed", ()=>{
    expect(store.getState().auth.tokenValue).toBeUndefined()
    expect(store.getState().auth.userId).toBeUndefined()
    expect(store.getState().auth.loggedIn).toBe(false)
    
    store.dispatch(loginSucceed(1, "abcd"))

    expect(store.getState().auth.tokenValue).toBe('abcd')
    expect(store.getState().auth.userId).toBe(1)
    expect(store.getState().auth.loggedIn).toBe(true)
  })

  it('loginFail', ()=>{
    store.dispatch(loginFail("oops"))
    expect(store.getState().auth.errorMsg).toBe("oops")
  })
})

describe("test thunk", ()=>{})
/**
 * @jest-environment node
 */

//library
import {createHttpTerminator} from "http-terminator";
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import axios from "axios";

//import and start mock API
import {serverIns} from "./server";


//import app objects
import {reducer} from "../../src/states/reducer";
import {loginUser} from "../../src/states/auth.thunk";

const httpTerminator = createHttpTerminator({server:serverIns})

afterAll(()=>{
  httpTerminator.terminate()
})

describe("test set up", ()=>{
  
  let store;
  beforeEach(()=>{
    store = createStore(reducer, applyMiddleware(thunk))
  })


  it("setup", ()=>{
    return axios({
      url: process.env.APIENDPOINT + "/ping",
      method: "get"
    })
    .then(res=>{
      expect(res.status).toBe(200)
      expect(res.data).toBe("ping")
    })
  })
})

describe("test loginThunk", ()=>{
  let store;
  beforeEach(()=>{
    store = createStore(reducer, applyMiddleware(thunk))
  })

  it("correct credential", async()=>{
    await store.dispatch(loginUser("correct", "whatever"))
    const authState = store.getState().auth;
    expect(authState.userId).toBe(1)
    expect(authState.tokenValue).toBe('abcd')
  })

  it("incorrect credential", async ()=>{
    await store.dispatch(loginUser('wrong cred'))
    const authState = store.getState().auth;
    expect(authState.errorMsg).toBe('Error in authenticating')
  })
})


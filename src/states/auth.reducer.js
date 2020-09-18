import {
  IN_PROGRESS,
  LOGIN_SUCCEED,
  LOGIN_FAIL,
  REGISTRATION_SUCCEED,
  REGISTRATION_FAIL,
  REGISTRATION_IN_PROGRESS
} from "./auth.actions";

export const auth = (state = {
    loggedIn: false,
    inProgress: false,
    tokenValue: undefined,
    userId: undefined,
    errorMsg: undefined,
    registered: false
  }, action) => {

  switch (action.type) {
    case IN_PROGRESS:
      return {...state, 
        inProgress: true
      }

    case LOGIN_SUCCEED:
      return {...state, 
        loggedIn: true, 
        userId: action.userId,
        tokenValue: action.tokenValue,
        inProgress: false,
      }

    case LOGIN_FAIL:
      return {...state,
        errorMsg: action.errorMsg,
        inProgress: false,
      }

    case REGISTRATION_SUCCEED:
      return {...state, 
        registered: true,
        inProgress: false,
      }

    case REGISTRATION_FAIL:
      return {...state, 
        error: action.errorMsg,
        inProgress: false,
      }

    default:
      return state;
  }
}
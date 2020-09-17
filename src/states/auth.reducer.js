import {
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCEED,
  LOGIN_FAIL,
  REGISTRATION_SUCCEED,
  REGISTRATION_FAIL,
  REGISTRATION_IN_PROGRESS
} from "./auth.actions";

export const auth = (state = {
    authenticated: false,
    loginInProgress: false,
    registrationInProgress: false,
    tokenValue: undefined,
    userId: undefined,
    errorMsg: undefined,
    registered: false
  }, action) => {

  switch (action.type) {
    case LOGIN_IN_PROGRESS:
      return {...state, 
        loginInProgress: true
      }

    case LOGIN_SUCCEED:
      return {...state, 
        authenticated: true, 
        userId: action.userId,
        tokenValue: action.tokenValue,
        loginInProgress: false,
      }

    case LOGIN_FAIL:
      return {...state,
        errorMsg: action.errorMsg,
        loginInProgress: false,
      }

    case REGISTRATION_IN_PROGRESS:
      return {...state,
        registrationInprogress:true,
    }

    case REGISTRATION_SUCCEED:
      return {...state, 
        registered: true,
        registrationInProgress: false,
      }

    case REGISTRATION_FAIL:
      return {...state, 
        error: action.errorMsg,
        registrationInProgress: false,
      }

    default:
      return state;
  }
}
export const LOGIN_IN_PROGRESS = "LOGIN_IN_PROGRESS"
export const LOGIN_SUCCEED= "LOGIN_SUCCEED"
export const LOGIN_FAIL="LOGIN_FAIL"
export const REGISTRATION_IN_PROGRESS = "REGISTRATION_IN_PROGRESS"
export const REGISTRATION_SUCCEED="REGISTRATION_SUCCEED"
export const REGISTRATION_FAIL="REGISTRATION_FAIL"

export const loginInProgress = () => {
  return {type: LOGIN_IN_PROGRESS}
}

export const loginSucceed = (userId, tokenValue) => {
  return {type: LOGIN_SUCCEED, tokenValue, userId}
}

export const loginFail = (errorMsg) => {
  return {type: LOGIN_FAIL, errorMsg}
}

export const registrationInProgress = () => {
  return {type: REGISTRATION_IN_PROGRESS}
}

export const registrationSucceed = () => {
  return {type: REGISTRATION_SUCCEED}
}

export const registrationFail = (errorMsg) => {
  return {type: REGISTRATION_FAIL, errorMsg}
}
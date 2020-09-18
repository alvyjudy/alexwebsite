export const IN_PROGRESS = "IN_PROGRESS"
export const LOGIN_SUCCEED= "LOGIN_SUCCEED"
export const LOGIN_FAIL="LOGIN_FAIL"
export const REGISTRATION_SUCCEED="REGISTRATION_SUCCEED"
export const REGISTRATION_FAIL="REGISTRATION_FAIL"

export const inProgress = () => {
  return {type: IN_PROGRESS}
}

export const loginSucceed = (userId, tokenValue) => {
  return {type: LOGIN_SUCCEED, tokenValue, userId}
}

export const loginFail = (errorMsg) => {
  return {type: LOGIN_FAIL, errorMsg}
}

export const registrationSucceed = () => {
  return {type: REGISTRATION_SUCCEED}
}

export const registrationFail = (errorMsg) => {
  return {type: REGISTRATION_FAIL, errorMsg}
}
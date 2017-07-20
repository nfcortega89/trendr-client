import axios from 'axios'
import { API_URL } from '../config'

export const USER_AUTH = "USER_AUTH"
export const USER_AUTH_SIGNOUT = "USER_AUTH_SIGNOUT"
export const USER_AUTH_SUCCESS = "USER_AUTH_SUCCESS"
export const USER_AUTH_FAIL = "USER_AUTH_FAIL"

export function userAuthSignout(data) {
  return {
    type: USER_AUTH_SIGNOUT,
    payload: data
  }
}
export function userAuthSuccess(data) {
  return {
    type: USER_AUTH_SUCCESS,
    payload: data
  }
}
export function userAuthFail(data) {
  return {
    type: USER_AUTH_FAIL,
    payload: data
  }
}
export function userAuthRequest(options = {}) {
  return (dispatch) => {
    axios.post(API_URL + '/api/users/auth', options)
      .then(res => {
          dispatch(userAuthSuccess(res.data))})
      .catch(err => dispatch(userAuthFail(err)))
  }
}

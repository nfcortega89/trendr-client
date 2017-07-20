/* eslint-disable no-console */
import * as actions from '../actions/userActions'

const intialState = {
  admin: false,
  uid: '',
  _id: ''
}

export default function(state = intialState, action) {
  switch(action.type) {
    case actions.USER_AUTH_SUCCESS:
      return Object.assign({}, state, {
        admin: action.payload.admin,
        uid: action.payload.uid,
        _id: action.payload._id
      })
    case actions.USER_AUTH_FAIL:
      console.error(action.payload)
      return state
    case actions.USER_AUTH_SIGNOUT:
      return intialState
    default: break
  }
  return state
}

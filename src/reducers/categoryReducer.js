/* eslint-disable no-console */
import * as actions from '../actions/categoryActions'

const intialState = {
  categories: []
}

export default function(state = intialState, action) {
  switch(action.type) {
    case actions.CATEGORY_FETCH_SUCCESS:
    return Object.assign({}, state, {
      categories: action.payload
    })
    case actions.CATEGORY_FETCH_FAIL:
    console.error(action.payload)
    return state
    default: break
  }
  return state
}

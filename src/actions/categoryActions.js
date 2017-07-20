import axios from 'axios'
import { API_URL } from '../config'

export const CATEGORY_FETCH = "CATEGORY_FETCH"
export const CATEGORY_FETCH_SUCCESS = "CATEGORY_FETCH_SUCCESS"
export const CATEGORY_FETCH_FAIL = "CATEGORY_FETCH_FAIL"

export function categoryDataSuccess(data) {
  return {
    type: CATEGORY_FETCH_SUCCESS,
    payload: data
  }
}
export function categoryDataFail(data) {
  return {
    type: CATEGORY_FETCH_FAIL,
    payload: data
  }
}
export function categoryDataRequest(options = {}) {
  return (dispatch) => {
    axios.get(API_URL + '/api/categories', options)
      .then(res => {
          dispatch(categoryDataSuccess(res.data.categories))})
      .catch(err => dispatch(categoryDataFail(err)))
  }
}

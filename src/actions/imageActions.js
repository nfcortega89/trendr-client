import axios from 'axios'
import { API_URL } from '../config'

export const IMAGE_FETCH_SUCCESS = "IMAGE_FETCH_SUCCESS"
export const IMAGE_FAILURE = "IMAGE_FAILURE"

export function imageDataRequest(options = {}) {
  return (dispatch) => {
    axios.get(API_URL + '/api/images', options)
      .then(res => {
        dispatch(imageDataSuccess(res.data.images))
      })
      .catch(err => dispatch(imageDataFail(err)))
  }
}
export function imageDataSuccess(data) {
  return {
    type: IMAGE_FETCH_SUCCESS,
    payload: data
  }
}
export function imageDataFail(data) {
  return {
    type: IMAGE_FAILURE,
    payload: data
  }
}

export const IMAGE_FEATURED_FETCH_SUCCESS = "IMAGE_FEATURED_FETCH_SUCCESS"

export function imageFeaturedRequest(options = {}) {
  return (dispatch) => {
    axios.get(API_URL + '/api/images', options)
      .then(res => {
        const payload = {
          url: res.data.url,
          category: options.params.category_id
        }
        dispatch(imageFeaturedSuccess(payload))
      })
      .catch(err => dispatch(imageFeaturedFail(err)))
  }
}
export function imageFeaturedSuccess(data) {
  return {
    type: IMAGE_FEATURED_FETCH_SUCCESS,
    payload: data
  }
}
export function imageFeaturedFail(data) {
  return {
    type: IMAGE_FAILURE,
    payload: data
  }
}

export const IMAGE_DELETE_SUCCESS = "IMAGE_DELETE_SUCCESS"

export function imageDeleteSuccess(imageId) {
  return {
    type: IMAGE_DELETE_SUCCESS,
    payload: imageId
  }
}
export function imageDeleteFail(data) {
  return {
    type: IMAGE_FAILURE,
    payload: data
  }
}
export function imageDeleteRequest(imageId) {
  return (dispatch) => {
    const options = { data: { id: imageId } }
    axios.delete(API_URL + '/api/images/' + imageId, options)
      .then(dispatch(imageDeleteSuccess(imageId)))
      .catch(err => dispatch(imageDeleteFail(err)))
  }
}

export const VOTE_POST_SUCCESS = "VOTE_POST_SUCCESS"
export const VOTE_POST_FAIL = "VOTE_POST_FAIL"

export function voteSuccess(data) {
  return {
    type: VOTE_POST_SUCCESS,
    payload: data
  }
}
export function voteFail(data) {
  return {
    type: VOTE_POST_FAIL,
    payload: data
  }
}
export function upvoteRequest(options = {}) {
  return (dispatch) => {
    axios.post(API_URL + '/api/images/upvote', options)
      .then(res => {
          dispatch(voteSuccess(res.data))})
      .catch(err => dispatch(voteFail(err)))
  }
}
export function downvoteRequest(options = {}) {
  return (dispatch) => {
    axios.post(API_URL + '/api/images/downvote', options)
      .then(res => {
          dispatch(voteSuccess(res.data))})
      .catch(err => dispatch(voteFail(err)))
  }
}

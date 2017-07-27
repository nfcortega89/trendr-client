/* eslint-disable no-console */
import * as actions from '../actions/imageActions'

const intialState = {
  images: [],
  featuredImages: {}
}

export default function(state = intialState, action) {
  if (action.type === actions.IMAGE_FETCH_SUCCESS) {
    console.log(action.payload)
    const images = action.payload.map((image, index) => {
      image.index = index
      return image
    })
    return Object.assign({}, state, {
      images
    })
  } else if (action.type === actions.IMAGE_DELETE_SUCCESS) {
    let deleteIndex
    state.images.forEach((image, index) => {
      if (image._id === action.payload) {
        deleteIndex = index
      }
    })
    const images = [...state.images]
    images.splice(deleteIndex, 1)
    return Object.assign({}, state, {
      images
    })
  } else if (action.type === actions.IMAGE_FEATURED_FETCH_SUCCESS) {
      const featuredImages = Object.assign({}, state.featuredImages, {
        [action.payload.category]: action.payload.url
      })
      return Object.assign({}, state, { featuredImages })
  } else if (action.type === actions.IMAGE_FAILURE) {
    return state
  }
  return state
}

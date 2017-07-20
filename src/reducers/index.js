import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import categoryReducer from './categoryReducer'
import userReducer from './userReducer'
import imageReducer from './imageReducer'

export default combineReducers({
  routing: routerReducer,
  category: categoryReducer,
  image: imageReducer,
  user: userReducer
})

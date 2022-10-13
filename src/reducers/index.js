import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import themeReducer from './themeReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  theme: themeReducer,
  counter: counterReducer,
  userData: userReducer
})

export default rootReducer

// state ={
//   theme: {isLight: true},
//   counter: {count: 0, step: 1},
//   userData: {user, isFetching, error},
// }

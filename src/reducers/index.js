import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import themeReducer from './themeReducer'

const rootReducer = combineReducers({
  theme: themeReducer,
  counter: counterReducer
})

export default rootReducer

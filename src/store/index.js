import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, createStore } from 'redux'
import counterReducer from '../reducers'

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware())
)

export default store

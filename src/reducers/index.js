import ACTION_TYPES from '../actions/actionTypes'

const initialState = { count: 0, step: 1, isLight: true }

const counterReducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case ACTION_TYPES.COUNTER_INCREMENT: {
      const { count, step } = state
      return { ...state, count: count + step }
    }
    case ACTION_TYPES.COUNTER_DECREMENT: {
      const { count, step } = state
      return { ...state, count: count - step }
    }
    case ACTION_TYPES.COUNTER_SET_STEP: {
      const { newStep } = action
      return { ...state, step: newStep }
    }
    case ACTION_TYPES.SET_THEME: {
      return { ...state, isLight: action.newTheme }
    }
    default:
      return state
  }
}
export default counterReducer

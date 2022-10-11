const initialState = { count: 0, step: 1, isLight: true }

const counterReducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case 'increment': {
      const { count, step } = state
      return { ...state, count: count + step }
    }
    case 'decrement': {
      const { count, step } = state
      return { ...state, count: count - step }
    }
    case 'setStep': {
      const { newStep } = action
      return { ...state, step: newStep }
    }
    case 'setTheme': {
      return { ...state, isLight: action.newTheme }
    }
    default:
      return state
  }
}
export default counterReducer

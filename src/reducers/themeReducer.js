import ACTION_TYPES from '../actions/actionTypes'

const initialState = { isLight: true }

const themeReducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case ACTION_TYPES.SET_THEME: {
      return { ...state, isLight: action.newTheme }
    }
    default:
      return state
  }
}
export default themeReducer

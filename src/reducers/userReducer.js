import ACTION_TYPES from '../actions/actionTypes'

const initialState = {
  user: {},
  isFetching: false,
  error: null
}

const userReducer = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case ACTION_TYPES.GET_USER_REQUEST: {
      return { ...state, isFetching: true }
    }
    case ACTION_TYPES.GET_USER_SUCCESS: {
      const { user } = action
      return { ...state, user: user, isFetching: false }
    }
    case ACTION_TYPES.GET_USER_ERROR: {
      const { err } = action
      return { ...state, error: err, isFetching: false }
    }
    default:
      return state
  }
}

export default userReducer

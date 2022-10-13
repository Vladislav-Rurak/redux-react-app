import ACTION_TYPES from './actionTypes'

export const counterIncrement = () => ({
  type: ACTION_TYPES.COUNTER_INCREMENT
})

export const counterDecrement = () => ({
  type: ACTION_TYPES.COUNTER_DECREMENT
})

export const counterSetStep = newStep => ({
  type: ACTION_TYPES.COUNTER_SET_STEP,
  newStep
})

export const setTheme = newTheme => ({
  type: ACTION_TYPES.SET_THEME,
  newTheme
})

//user

export const getUserAction = () => ({
  type: ACTION_TYPES.GET_USER_ACTION
})

export const getUserRequest = () => ({
  type: ACTION_TYPES.GET_USER_REQUEST
})

export const getUserSuccess = user => ({
  type: ACTION_TYPES.GET_USER_SUCCESS,
  user
})

export const getUserError = err => ({
  type: ACTION_TYPES.GET_USER_ERROR,
  err
})

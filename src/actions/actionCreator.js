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

import React from 'react'
import { connect } from 'react-redux'
import {
  counterDecrement,
  counterIncrement,
  counterSetStep
} from '../../actions/actionCreator'

function Counter (props) {
  const { count, step, increment, decrement, setStep } = props

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type='number' value={step} onChange={setStep} />
    </>
  )
}

const mapStateToProps = state => {
  return state.counter
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(counterIncrement())
    },
    decrement: () => {
      dispatch(counterDecrement())
    },
    setStep: ({ target: { value } }) => {
      dispatch(counterSetStep(Number(value)))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

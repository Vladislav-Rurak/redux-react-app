import React from 'react'
import { connect } from 'react-redux'
import { setTheme } from '../../actions/actionCreator'

function ThemeSwitcher (props) {
  const { isLight, setTheme } = props

  return (
    <>
      <div>Switched to {isLight ? 'Light' : 'Dark'}</div>
      <button
        onClick={() => {
          setTheme(isLight)
        }}
      >
        Switched {isLight ? 'Dark' : 'Light'}
      </button>
    </>
  )
}

const mapStateToProps = state => {
  return state.theme
}

const mapDispatchToProps = dispatch => {
  return {
    setTheme: isLight => {
      dispatch(setTheme(!isLight))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher)

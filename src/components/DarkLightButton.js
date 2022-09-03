import React from 'react'
import '../styles/DarkLightButton.css'

const DarkLightButton = ({changeTheme,theme}) => {

  return (
    <>
    <button onClick={changeTheme} className='toggle' data-theme={theme}>
        <i className='indicator'></i>
    <span className='bubble-title'>{theme === 'light' ? 'Dark Theme' : 'Light Theme'}</span>
    </button>
    </>
  )
}

export default DarkLightButton
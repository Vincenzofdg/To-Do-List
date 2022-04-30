import React from 'react';
import { HeaderCSS } from '../css'

import CalendarImg from '../images/Calendar.png'

function Header() {

  return (
    <HeaderCSS>
      <div className='title'>
        <h1>My Planner</h1>
      </div>
      <div className='btn-calendar'>
        <img src={ CalendarImg } alt='Calendar Icon' onClick={ () => console.log('FOI') }/>
      </div>

    </HeaderCSS>
  )
}

export default Header;
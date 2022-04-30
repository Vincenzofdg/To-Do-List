import React from 'react';
import { DayCSS } from '../css'

function Day() {

  const time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

  const hour = (n) => {
    const theHour = n < 10 ? '0' + n : n
    return (
      <div key={ n } id='hour'>
        <h1>{`${theHour}:00`}</h1>
        <ul className='task'>

        </ul>
      </div>
    )
  }

  return (
    <DayCSS>
      <h1>Planner</h1>

      <div>
        <div className='previous' />
        <div className='hours'>
          { time.map((x) => hour(x)) }
        </div>
        <div className='next'/>
      </div>

    </DayCSS>
  )
}

export default Day;
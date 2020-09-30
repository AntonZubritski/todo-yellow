import React from 'react'
import { _transformSpeed, _transformDate } from '../../services/transform-components'
import HumanBlock from './human-block.jsx'

const JogItem = ({jog, filterFrom, filterTo}) => {
    if (filterFrom <= jog.date && filterTo >= jog.date) {
      return (
        <div className="sport-item" >
          <HumanBlock jog={jog} />
          <ul>
            <li className="date-workout">{_transformDate(jog.date)}</li>
            <li>
              Speed: <u>{_transformSpeed(jog.distance, jog.time)} km/h</u>
            </li>
            <li>
              Distance: <u>{jog.distance}</u>
            </li>
            <li>
              Time: <u>{jog.time} min</u>
            </li>
          </ul>
        </div>
      )
    } else { return null }
  }

  export default JogItem
import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import humanIcon from '../../img/icon.svg'
import "./sport-list.css"
import NullJogs from "../null-jogs"

const SportList = () => {
  const jogs = useSelector((state) => state.jogs)

    return (
        <div className="container">
        <div className="sport-list">
          {jogs ? jogs.map((jog, key) => (
          <div className="sport-item" key={`${key}${jog.id}`}>
            <img src={humanIcon} className="human-icon" alt="icon" />
            <ul>
              <li className="date-workout">{jog.date}</li>
              <li>
                Speed: <u>{jog.speed} km/h</u>
              </li>
              <li>
                Distance: <u>{jog.distance}</u>
              </li>
              <li>
                Time: <u>{jog.time} min</u>
              </li>
            </ul>
          </div>)) 
          : <NullJogs /> } 
        </div>
      </div>
    )
}
export default SportList
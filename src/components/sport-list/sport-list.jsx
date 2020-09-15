import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import humanIcon from '../../img/icon.svg'
import './sport-list.css'
import NullJogs from '../null-jogs'

const SportList = () => {
  const jogs = useSelector((state) => state.jogs)
  const dispatch = useDispatch()

  const _transformSpeed = (distance, time) => {
    const km = distance/1000
    const h = time/60
    return Math.trunc((km/h) * 100) / 100;
  }

  return (
    <div className="container">
      <div className="sport-list">
        {jogs ? (
          jogs.map((jog, key) => (
            <div className="sport-item" key={`${key}${jog.id}`}>
              <div className="human-block">
                <img src={humanIcon} className="human-icon" alt="icon" />
                <div className="a">Edit</div>
                <div className="b" onClick={()=>dispatch(actions.DeleteJogFetch(jog.id, jog.user_id))}>Delete</div>
              </div>
              <ul>
                <li className="date-workout">{jog.date}</li>
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
          ))
        ) : (
          <NullJogs />
        )}
      </div>
    </div>
  )
}
export default SportList

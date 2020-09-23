import React from 'react'
import { useSelector } from 'react-redux'
import { _transformSpeed, _transformDate } from '../../services/transform-components'
import ContainerWrapper from '../menu-mobile-wrapper'
import HumanBlock from './human-block.jsx'
import NullJogs from '../null-jogs'
import './sport-list.css'

const SportList = () => {
  const { jogs, filterFrom, filterTo } = useSelector((state) => state.pageStore)

  const jogItem = (jog, key) => {
    if (filterFrom <= jog.date && filterTo >= jog.date) {
      return (
        <div className="sport-item" key={`${key}${jog.id}`}>
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
    }
  }

  return (
    <>
      <div className="sport-list">
        {jogs.length !== 0 ? (
          jogs.map((jog, key) => jogItem(jog, key))
        ) : (
          <NullJogs />
        )}
      </div>
    </>
  )
}
const SportContainer = () => ContainerWrapper(SportList)

export default SportContainer

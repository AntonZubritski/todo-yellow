import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { HumanSvg } from '../svg-icons/svg-icons.js'
import ContainerWrapper from '../menu-mobile-wrapper'
import NullJogs from '../null-jogs'
import './sport-list.css'

const SportList = () => {
  const { jogs, filterFrom, filterTo } = useSelector((state) => state.pageStore)
  const dispatch = useDispatch()

  const _transformSpeed = (distance, time) => {
    const km = distance / 1000
    const h = time / 60
    return Math.trunc((km / h) * 100) / 100
  }
  const _transformDate = (created) => {
    const day = new Date(created).toLocaleString('en', { day: '2-digit' })
    const month = new Date(created).toLocaleString('en', { month: '2-digit' })
    const year = new Date(created).getFullYear()
    return `${day}.${month}.${year}`
  }

  const jogItem = (jog, key) => {
    if (filterFrom <= jog.date && filterTo >= jog.date) {
      return (
        <div className="sport-item" key={`${key}${jog.id}`}>
          <div className="human-block">
            <HumanSvg className={"human-icon"} onClick={()=> dispatch(actions.MobileClickJog(jog.id))}/>
            <div
              className={jog.mobile_btn ? 'a a-active' : 'a'}
              onClick={() => dispatch(actions.EditButton(jog))}
            >
              Edit
            </div>
            <div
              className={jog.mobile_btn ? 'b b-active' : 'b'}
              onClick={() =>
                dispatch(actions.DeleteJogFetch(jog.id, jog.user_id))
              }
            >
              Delete
            </div>
          </div>
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

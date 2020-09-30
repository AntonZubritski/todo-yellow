import React from 'react'
import { useSelector } from 'react-redux'
import ContainerWrapper from '../menu-mobile-wrapper'
import JogItem from './jog-item.jsx'
import NullJogs from '../null-jogs'
import './sport-list.css'

const SportList = () => {
  const { jogs, filterFrom, filterTo } = useSelector((state) => state.pageStore)

  return (
    <div className="sport-list">
      {jogs.length !== 0 ? (
        jogs.map((jog, key) => (
          <JogItem
            jog={jog}
            key={`${key}+${jog.id}`}
            filterFrom={filterFrom}
            filterTo={filterTo}
          />
        ))
      ) : (
        <NullJogs />
      )}
    </div>
  )
}
const SportContainer = () => ContainerWrapper(SportList)

export default SportContainer

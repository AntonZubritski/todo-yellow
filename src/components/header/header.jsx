import React from 'react'
import { useSelector } from 'react-redux'
import NavBlock from '../nav-block'
import DateBlock from '../date-block'
import { LogoSvg } from '../svg-icons/svg-icons.js'
import './header.css'

const Header = () => {
  const { filter, menuIcon } = useSelector((state) => state.serviceStore)
  const { filterFrom, filterTo } = useSelector((state) => state.pageStore)

  return (
    <div className="head">
      <div className={menuIcon ? 'header white' : 'header'}>
        <LogoSvg />
        <NavBlock />
      </div>
      <DateBlock filter={filter} filterFrom={filterFrom} filterTo={filterTo} />
    </div>
  )
}
export default Header

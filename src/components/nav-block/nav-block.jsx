import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, NavLink } from 'react-router-dom'
import * as actions from '../../redux/actions'
import { FilterSvg, MenuButton } from '../svg-icons/svg-icons.js'
import './nav-block.css'

const NavBlock = () => {
  const { filter, menuIcon } = useSelector((state) => state.serviceStore)
  const dispatch = useDispatch()
  const location = useLocation()

  return location.pathname !== '/entry' ? (
    <div className="navBlock">
      <ul className={'nav-header'}>
        <li className={location.pathname === '/jogs' ? 'active' : null}>
          <NavLink to="/jogs">JOGS</NavLink>
        </li>
        <li className={location.pathname === '/info' ? 'active' : null}>
          <NavLink to="/info">INFO</NavLink>
        </li>
        <li className={location.pathname === '/conact' ? 'active' : null}>
          <NavLink to="/contact">CONTACT US</NavLink>
        </li>
      </ul>
      <div
        className={
          menuIcon || location.pathname !== '/jogs'
            ? 'filter-block disabled'
            : 'filter-block'
        }
        onClick={() => dispatch(actions.FilterActive())}
      >
        {filter ? <FilterSvg active /> : <FilterSvg />}
      </div>
      <MenuButton
        menuIcon={menuIcon}
        onClick={() => dispatch(actions.SwitchMenuIcon())}
      />
    </div>
  ) : null
}
export default NavBlock

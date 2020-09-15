import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, NavLink } from 'react-router-dom'
import * as actions from '../../redux/actions'
import './header.css'
import logo from '../../img/logo.svg'
import filterActive from '../../img/filter-active.svg'
import filterFalse from '../../img/filter.svg'

const Header = () => {
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const location = useLocation()

  const navBlock = (
    <div className="navBlock">
      <ul className="nav-header">
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
      <div className="filter-block">
        <img
          src={filter ? filterActive : filterFalse}
          onClick={() => dispatch(actions.FilterActive())}
          className={filter ? 'filter-active' : 'filter'}
          alt="filter"
        />
      </div>
    </div>
  )
  return (
    <div className="head">
      <div className="header">
        <img src={logo} className="logo" alt="LOGO" />
        {location.pathname !== '/entry' ? navBlock : null}
      </div>
      <div className={filter ? 'date-form' : 'date-form-hide'}>
        <p className="date-input">
          Date from
          <input type="date" className="date" id="trip-start" step="4" />
        </p>
        <p className="date-input">
          Date to
          <input type="date" className="date" id="trip-finish" />
        </p>
      </div>
    </div>
  )
}
export default Header

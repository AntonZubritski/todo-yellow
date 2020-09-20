import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, NavLink } from 'react-router-dom'
import * as actions from '../../redux/actions'
import logo from '../../img/logo.svg'
import filterActive from '../../img/filter-active.svg'
import filterFalse from '../../img/filter.svg'
import { MenuSvg } from '../svg-icons/svg-icons.js'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './header.css'

const Header = () => {
  const { filter } = useSelector((state) => state.serviceStore)
  const { filterFrom, filterTo } = useSelector((state) => state.pageStore)
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
      <MenuSvg />
    </div>
  )
  return (
    <div className="head">
      <div className="header">
        <img src={logo} className="logo" alt="LOGO" />
        {location.pathname !== '/entry' ? navBlock : null}
      </div>
      <div className={filter ? 'date-form' : 'date-form-hide'}>
        <div className="date-form-input">
        <div className="date-input">
          Date from
          <DatePicker
            selected={filterFrom === null ? null : new Date(filterFrom)}
            className="date"
            dateFormat="dd.MM.yyyy"
            onChange={(date) => dispatch(actions.ChangeFilterFrom(date))}
          />
        </div>
        <div className="date-input">
          Date to
          <DatePicker
            selected={filterTo}
            className="date"
            dateFormat="dd.MM.yyyy"
            onChange={(date) => dispatch(actions.ChangeFilterTo(date))}
          />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header

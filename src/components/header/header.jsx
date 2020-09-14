import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import './header.css'
import logo from '../../img/logo.svg'
import filterActive from '../../img/filter-active.svg'
import filterFalse from '../../img/filter.svg'


const Header = () => {
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  return (
    <div className="head">
    <div className="header">
      <img src={logo} className="logo" alt="LOGO" />
      <div className="navBlock">
        <ul className="nav-header">
          <li className="active">JOGS</li>
          <li>INFO</li>
          <li>CONTACT US</li>
        </ul>
        <div className="filter-block">
        <img
          src={filter ? filterActive : filterFalse}
          onClick={() => dispatch(actions.FilterActive())}
          className={filter ? "filter-active" : "filter"}
          alt="filter"
        />
        </div>

      </div>
    </div>
    <div className={filter ? "date-form" : "date-form-hide"}>
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

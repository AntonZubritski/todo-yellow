import React from 'react'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

const ContainerWrapper = (View) => {
  const { menuIcon } = useSelector((state) => state.serviceStore)
  const location = useLocation()
  const dispatch = useDispatch()

  return (
    <div className="container">
      {menuIcon ? (
        <ul className={'nav-header'}>
          <li className={location.pathname === '/jogs' ? 'active' : null}>
            <NavLink
              to="/jogs"
              onClick={() => dispatch(actions.SwitchMenuIcon())}
            >
              JOGS
            </NavLink>
          </li>
          <li className={location.pathname === '/info' ? 'active' : null}>
            <NavLink
              to="/info"
              onClick={() => dispatch(actions.SwitchMenuIcon())}
            >
              INFO
            </NavLink>
          </li>
          <li className={location.pathname === '/conact' ? 'active' : null}>
            <NavLink
              to="/contact"
              onClick={() => dispatch(actions.SwitchMenuIcon())}
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      ) : (
        <View />
      )}
    </div>
  )
}
export default ContainerWrapper

import React from 'react'
import { NavLink } from 'react-router-dom'
import * as actions from '../../redux/actions'
import { useDispatch } from 'react-redux'
import './start-page.css'
import Header from '../header'
import { BearFaceSvg } from '../svg-icons/svg-icons.js'
import useMobileDetect from 'use-mobile-detect-hook'

const StartPage = () => {
  const dispatch = useDispatch()
  const detectMobile = useMobileDetect()

  return (
    <div className="grid-container">
      <Header />
      <div className="container">
        <div className="block-in">
          {detectMobile.isMobile() ? (
            <BearFaceSvg color="#e990f9" width={'160pt'} height={'150pt'} />
          ) : (
            <BearFaceSvg color="#ffff" width={160} height={150} />
          )}

          <NavLink
            to="/jogs"
            className="btn-in"
            onClick={() => dispatch(actions.LogInFetch())}
          >
            Let me in
          </NavLink>
        </div>
      </div>
    </div>
  )
}
export default StartPage

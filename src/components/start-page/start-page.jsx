import React from 'react'
import { NavLink } from 'react-router-dom'
import * as actions from '../../redux/actions'
import { useDispatch } from 'react-redux'
import './start-page.css'
import bearFace from '../../img/bear-face.svg'
import Header from '../header'

const StartPage = () => {
  const dispatch = useDispatch()

  return (
    <div className="grid-container">
      <Header />
      <div className="container">
        <div className="block-in">
          <img src={bearFace} className="bear-face" alt="BearFaceImg" />
          <NavLink to="/jogs" className="btn-in" onClick={() => dispatch(actions.LogInFetch())}>
            Let me in
          </NavLink>
        </div>
      </div>
    </div>
  )
}
export default StartPage

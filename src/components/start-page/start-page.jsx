import React from 'react'
import './start-page.css'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import bearFace from '../../img/bear-face.svg'
import logo from '../../img/logo.svg'

const StartPage = () => {
  const dispatch = useDispatch()

  return (
    <div className="grid-container">
      <div className="header">
        <img src={logo} className="logo" alt="LOGO" />
      </div>

      <div className="container">
        <div className="block-in">
          <img src={bearFace} className="bear-face" alt="BearFaceImg" />
          <input
            type="button"
            value="Let me in"
            className="btn-in"
            onClick={() => dispatch(actions.LogInFetch())}
          />
        </div>
      </div>
    </div>
  )
}
export default StartPage

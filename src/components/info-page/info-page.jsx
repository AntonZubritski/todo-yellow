import React from 'react'
import Header from '../header'
import InfoContainer from './block-info.jsx'
import './info-page.css'

const InfoPage = () => {
  return (
    <div className="grid-container">
      <Header />
      <div className="container">
        <InfoContainer />
      </div>
    </div>
  )
}
export default InfoPage

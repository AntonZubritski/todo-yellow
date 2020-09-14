import React from 'react'
import JogsPage from '../jogs-page'
import StartPage from '../start-page'
import './app.css'
import humanIcon from '../../img/icon.svg'
import add from '../../img/add.svg'


const App = () => {
  return (
    <>
    <JogsPage />
    <StartPage />


      {/* Info Page */}
      {/* <div className="grid-container3">
        <div className="header">
          <img src={logo} className="logo" alt="LOGO" />
          <div className="navBlock">
            <ul className="nav-header">
              <li className="active">JOGS</li>
              <li>INFO</li>
              <li>CONTACT US</li>
            </ul>
            <img src={filterActive} className="filter_active" alt="filter" />
          </div>
        </div>

        <div className="container">
          <div className="block-info">
            <div className="info">INFO</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div> */}
      {/* Info Page END */}
    </>
  )
}

export default App

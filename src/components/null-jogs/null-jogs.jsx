import React from 'react'
import './null-jogs.css'
import sadEmoticon from '../../img/sad-emoticon.svg'

const NullJogs = () => {
  return (
    <div className="container">
      <div className="sad-block">
        <img src={sadEmoticon} className="sad-emoticon" alt="SoSad" />
        <p>Nothing is there</p>
        <input
          type="button"
          value="Create your first jog"
          className="btn-create"
          onClick={console.log('Modal')}
        />
      </div>
    </div>
  )
}
export default NullJogs

import React from 'react'
import * as actions from '../../redux/actions'
import { useDispatch } from 'react-redux'
import './null-jogs.css'
import { SadEmoticonSvg } from '../svg-icons/svg-icons'

const NullJogs = () => {
  const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="sad-block">
        <SadEmoticonSvg className={'sad-emoticon'} />
        <p>Nothing is there</p>
        <input
          type="button"
          value="Create your first jog"
          className="btn-create"
          onClick={() => {
            dispatch(actions.ModalActive())
          }}
        />
      </div>
    </div>
  )
}
export default NullJogs

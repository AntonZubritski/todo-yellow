import React from 'react'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import './null-jogs.css'
// import sadEmoticon from '../../img/sad-emoticon.svg'
import { SadEmoticonSvg } from '../svg-icons/svg-icons'

const NullJogs = () => {
  const dispatch = useDispatch()
  const { jogs } = useSelector((state) => state.pageStore)

  const sadBlock = (
    <div className="sad-block">
      {/* <img src={sadEmoticon} className="sad-emoticon" alt="SoSad" /> */}
      <SadEmoticonSvg className={"sad-emoticon"} />
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
  )

  return (
    <div className="container">
      {jogs.length !== 0 ? null : sadBlock}
    </div>
  )
}
export default NullJogs

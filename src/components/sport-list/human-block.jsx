import React from 'react'
import * as actions from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { HumanSvg } from '../svg-icons/svg-icons.js'

const HumanBlock = ({ jog }) => {
  const dispatch = useDispatch()

  return (
    <div className="human-block">
      <HumanSvg
        className={'human-icon'}
        onClick={() => dispatch(actions.mobileClickJog(jog.id))}
      />
      <div
        className={jog.mobile_btn ? 'a a-active' : 'a'}
        onClick={() => dispatch(actions.editButton(jog))}
      >
        Edit
      </div>
      <div
        className={jog.mobile_btn ? 'b b-active' : 'b'}
        onClick={() => dispatch(actions.deleteJogFetch(jog.id, jog.user_id))}
      >
        Delete
      </div>
    </div>
  )
}
export default HumanBlock

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import useMobileDetect from 'use-mobile-detect-hook'
import { CancelSvg } from '../svg-icons/svg-icons'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './modal-add.css'

const ModalAdd = () => {
  const modalState = useSelector((state) => state.serviceStore.modalState)
  const pageStore = useSelector((state) => state.pageStore)
  const dispatch = useDispatch()
  const mobileDetect = useMobileDetect()

  const onChangeInput = (e) => {
    const { name, value } = e.target
    dispatch(actions.onChange(name, value))
  }
  const onSubmit = (e) => {
    const { distance, time, date } = pageStore
    e.preventDefault()
    if (modalState) {
      dispatch(actions.postJogFetch(distance, time, date))
    } else {
      dispatch(actions.editJogFetch(pageStore))
    }
  }

  return (
    <div className="container">
      <div className="block-add">
        <NavLink to="/jogs">
          <CancelSvg
            onClick={() => dispatch(actions.cancelButton())}
            className="cancel-icon"
            width={'27'}
            height={'27'}
            color={'#ffffff'}
          />
        </NavLink>
        <form className="form-add" onSubmit={onSubmit}>
          <label>
            Distance
            <input
              type="number"
              name="distance"
              placeholder="km-m"
              value={pageStore.distance}
              onChange={onChangeInput}
              pattern="[0-9]"
              required
            />
          </label>
          <label>
            Time
            <input
              type="number"
              name="time"
              placeholder="min"
              value={pageStore.time}
              onChange={onChangeInput}
              pattern="[0-9]"
              required
            />
          </label>
          <div className="date-label">
            Date
            <div>
            <DatePicker
              className="date-modal"
              selected={pageStore.date}
              dateFormat="dd.MM.yyyy"
              withPortal={mobileDetect.isMobile() ? true : false}
              onChange={(date) => dispatch(actions.onChangeModalDate(date))}
            />
            </div>
          </div>

          <input type="submit" value={modalState ? 'Save' : 'Edit'} />
        </form>
      </div>
    </div>
  )
}
export default ModalAdd

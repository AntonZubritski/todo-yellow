import React from 'react'
import { NavLink } from 'react-router-dom'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from 'react-datepicker'
import { CancelSvg } from '../svg-icons/svg-icons'
import 'react-datepicker/dist/react-datepicker.css'
import './modal-add.css'

const ModalAdd = () => {
  const modalState = useSelector((state) => state.serviceStore.modalState)
  const pageStore = useSelector((state) => state.pageStore)
  const dispatch = useDispatch()

  const onChangeInput = (e) => {
    const { name, value } = e.target
    dispatch(actions.OnChange(name, value))
  }
  const onSubmit = (e) => {
    const { distance, time, date } = pageStore
    e.preventDefault()
    if (modalState) {
      dispatch(actions.PostJogFetch(distance, time, date))
    } else {
      dispatch(actions.EditJogFetch(pageStore))
    }
  }

  return (
    <div className="container">
      <div className="block-add">
        <NavLink to="/jogs">
          <CancelSvg
            onClick={() => dispatch(actions.CancelButton())}
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
          <label>
            Date
            <div>
              <DatePicker
                selected={pageStore.date}
                dateFormat="dd.MM.yyyy"
                onChange={(date) => dispatch(actions.OnChangeModalDate(date))}
              />
            </div>
          </label>
          <input type="submit" value={modalState ? 'Save' : 'Edit'} />
        </form>
      </div>
    </div>
  )
}
export default ModalAdd

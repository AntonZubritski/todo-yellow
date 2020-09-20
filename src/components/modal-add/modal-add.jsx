import React from 'react'
import { NavLink } from 'react-router-dom'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './modal-add.css'
import cancel from '../../img/cancel.svg'

const ModalAdd = () => {
  const modalState = useSelector((state) => state.serviceStore.modalState)
  const pStore = useSelector((state) => state.pageStore)
  const dispatch = useDispatch()

  const onChangeInput = (e) => {
    const { name, value } = e.target
    dispatch(actions.OnChange(name, value))
  }
  const onSubmit = (e) => {
    const { distance, time, date } = pStore
    e.preventDefault()
    if (modalState) {
      dispatch(actions.PostJogFetch(distance, time, date))
    } else {
      dispatch(actions.EditJogFetch(pStore))
    }
  }

  return (
    <div className="container">
      <div className="block-add">
        <NavLink to="/jogs">
          <img
            src={cancel}
            className="cancel-icon"
            alt="cancel"
            onClick={() => dispatch(actions.CancelButton())}
          />
        </NavLink>
        <form className="form-add" onSubmit={onSubmit}>
          <label>
            Distance
            <input
              type="number"
              name="distance"
              placeholder="km-m"
              value={pStore.distance}
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
              value={pStore.time}
              onChange={onChangeInput}
              pattern="[0-9]"
              required
            />
          </label>
          <label>
            Date
            <div>
              <DatePicker
                selected={pStore.date}
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

import React from 'react'
import { NavLink } from 'react-router-dom'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import './modal-add.css'
import cancel from '../../img/cancel.svg'

const ModalAdd = () => {
  const distance = useSelector((state) => state.distance)
  const time = useSelector((state) => state.time)
  const date = useSelector((state) => state.date)

  const dispatch = useDispatch()

  const onChangeInput = (e) => {
    const { name, value } = e.target
    dispatch(actions.OnChange(name, value))
  }
  const onSubmit = (e) => {
      e.preventDefault()
      dispatch(actions.PostJogFetch(distance, time, date))
  }
  return (
    <div className="container">
      <div className="block-add">
        <NavLink to="/jogs">
          <img
            src={cancel}
            className="cancel-icon"
            alt="cancel"
            onClick={() => dispatch(actions.ModalActive())}
          />
        </NavLink>
        <form className="form-add" onSubmit={onSubmit}>
          <label>
            Distance
            <input
              type="number"
              name="distance"
              placeholder="km-m"
              value={distance}
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
              value={time}
              onChange={onChangeInput}
              pattern="[0-9]"
              required
            />
          </label>
          <label>
            Date
            <input
              type="date"
              name="date"
              value={date}
              onChange={onChangeInput}
              required
            />
          </label>
          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  )
}
export default ModalAdd

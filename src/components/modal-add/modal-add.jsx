import React from 'react'
import { NavLink } from 'react-router-dom'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import './modal-add.css'
import cancel from '../../img/cancel.svg'

const _transformDate = (created) => {
  const day = new Date(created).toLocaleString('en', { day: '2-digit' })
  const month = new Date(created).toLocaleString('en', { month: '2-digit' })
  const year = new Date(created).getFullYear()
  return `${year}-${month}-${day}`
}

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
            <input
              type="date"
              name="date"
              value={_transformDate(pStore.date)}
              onChange={onChangeInput}
              required
            />
          </label>
          <input type="submit" value={modalState ? 'Save' : 'Edit'} />
        </form>
      </div>
    </div>
  )
}
export default ModalAdd

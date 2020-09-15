import React, { useEffect } from 'react'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../header'
import SportList from '../sport-list'
import ModalAdd from '../modal-add'
import './jogs-page.css'
import add from '../../img/add.svg'
import { NavLink } from 'react-router-dom'

const JogsPage = () => {
  const modal = useSelector((state) => state.modal)
  const token = useSelector((state) => state.token)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.GetJogsFetch())
  }, [token])

  const btnAdd = (
    <div
      className="btn-add"
      onClick={() => {
        dispatch(actions.ModalActive())
      }}
    >
      <img src={add} className="add" alt="add" />
    </div>
  )

  return (
    <div className="grid-container">
      <Header />
      {modal ? <ModalAdd /> : <SportList />}
      {modal ? null : btnAdd}
    </div>
  )
}

export default JogsPage

import React, { useEffect } from 'react'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../header'
import SportList from '../sport-list'
import ModalAdd from '../modal-add'
import './jogs-page.css'
import add from '../../img/add.svg'



const JogsPage = () => {
  const modal = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(() => dispatch(actions.GetJogsFetch()), [])

  const btnAdd = (
    <button className="btn-add" onClick= {() => dispatch(actions.ModalActive())}>
    <img src={add} className="add" alt="add" />
  </button>
  )

  return (
    <div className="grid-container2">
      <Header />
      {modal ? <ModalAdd /> : <SportList /> }
      {btnAdd}
    </div>
  )
}

export default JogsPage

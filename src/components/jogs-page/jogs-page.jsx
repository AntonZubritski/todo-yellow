import React, { useEffect } from 'react'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../header'
import SportList from '../sport-list'
import ModalAdd from '../modal-add'
import './jogs-page.css'
import add from '../../img/add.svg'

const JogsPage = () => {
  const { modal } = useSelector((state) => state.serviceStore)
  const { jogs } = useSelector((state) => state.pageStore)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.GetJogsFetch())
  }, [])

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
      {modal || jogs.length === 0 ? null : btnAdd}
    </div>
  )
}

export default JogsPage

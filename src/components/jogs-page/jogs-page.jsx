import React, { useEffect } from 'react'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../header'
import SportList from '../sport-list'
import ModalAdd from '../modal-add'
import './jogs-page.css'
import add from '../../img/add.svg'
import { AddSvg } from '../svg-icons/svg-icons.js'
import useMobileDetect from 'use-mobile-detect-hook'

const JogsPage = () => {
  const { modal, isAuth } = useSelector((state) => state.serviceStore)
  const { jogs } = useSelector((state) => state.pageStore)
  const dispatch = useDispatch()
  const detectMobile = useMobileDetect()

  useEffect(() => {
    dispatch(actions.GetJogsFetch())
  }, [isAuth])

  const btnAdd = (
    <div
 
      onClick={() => {
        dispatch(actions.ModalActive())
      }}
    >
      {/* <img src={add} className="add" alt="add" /> */}
      {detectMobile.isMobile() ? (
        <AddSvg width='47pt' height='47pt' />
      ) : (
        <AddSvg width={60} height={60} />
      )}
      
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

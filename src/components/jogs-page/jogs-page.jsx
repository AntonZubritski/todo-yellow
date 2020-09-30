import React, { useEffect } from 'react'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../header'
import SportContainer from '../sport-list'
import ModalAdd from '../modal-add'
import { AddSvg } from '../svg-icons/svg-icons.js'
import useMobileDetect from 'use-mobile-detect-hook'
import './jogs-page.css'

const JogsPage = () => {
  const detectMobile = useMobileDetect()
  const { modal, isAuth, menuIcon } = useSelector((state) => state.serviceStore)
  const { jogs } = useSelector((state) => state.pageStore)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(actions.GetJogsFetch())
  }, [dispatch, isAuth])

  const btnAdd = (
    !menuIcon ? (
    <div
      onClick={() => {
        dispatch(actions.ModalActive())
      }}
    >
      {detectMobile.isMobile() ? (
        <AddSvg width="47pt" height="47pt" />
      ) : (
        <AddSvg width={60} height={60} />
      )}
    </div>) : null
  )

  return (
    <div className="grid-container">
      <Header />
      {modal ? <ModalAdd /> : <SportContainer />}
      {modal || jogs.length === 0 ? null : btnAdd}
    </div>
  )
}

export default JogsPage

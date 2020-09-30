import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import JogsPage from '../jogs-page'
import StartPage from '../start-page'
import InfoPage from '../info-page'
import ContactPage from '../contact-page'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import './app.css'

const App = () => {
  const { isAuth } = useSelector((state) => state.serviceStore)
  let history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const localToken = localStorage.getItem('jwt')
    if (isAuth) {
      history.push('/jogs')
    } else if (!isAuth && localToken !== null) {
      dispatch(actions.SetToken(localToken))
    } else {
      history.push('/entry')
    }
  }, [dispatch, history, isAuth])

  return (
    <Switch>
      <Route exact path="/entry" component={StartPage} />
      <Route exact path="/jogs" component={JogsPage} />
      <Route path="/info" component={InfoPage} />
      <Route path="/contact" component={ContactPage} />
      <Redirect to="/entry" />
    </Switch>
  )
}

export default App

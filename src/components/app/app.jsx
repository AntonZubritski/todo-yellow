import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom'
import JogsPage from '../jogs-page'
import StartPage from '../start-page'
import InfoPage from '../info-page'
import './app.css'

const App = () => {
  let history = useHistory();

  return (    
    <BrowserRouter>
      <Switch>
        <Route path="/entry" component={StartPage} />
        <Route path="/jogs" component={JogsPage} />
        <Route path="/info" component={InfoPage} />
        <Redirect path="/" to="/entry" />
      </Switch>
    </BrowserRouter>
  )
}

export default App

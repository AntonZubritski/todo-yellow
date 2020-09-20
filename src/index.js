import React from 'react'
import store from './redux/store'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

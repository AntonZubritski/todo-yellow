import React from 'react'
import store from './redux/store'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch.bind(store)} />
  </Provider>,
  document.getElementById('root')
)
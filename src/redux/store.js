import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

const update = () => {
    console.log(store.getState())
  }
  store.subscribe(update)

export default store
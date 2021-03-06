import { createStore, applyMiddleware, combineReducers } from 'redux'
import { pageReducer, serviceReducer } from './reducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  pageStore: pageReducer,
  serviceStore: serviceReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

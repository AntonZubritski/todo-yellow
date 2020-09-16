import * as constants from './constants'
const initialStatePage = {
  jogs: [],
  distance: '',
  time: '',
  date: '',
  filterFrom: '1970-01-01',
  filterTo: new Date().toISOString(),
}
const initialStateService = {
  token: null,
  filter: false,
  modal: false,
  modalState: true,
  isAuth: false,
}

const pageReducer = (state = initialStatePage, action) => {
  switch (action.type) {
    case constants.SET_JOGS:
      return { ...state, jogs: action.payload }
    case constants.ON_CHANGE:
      return { ...state, [action.name]: action.value }
    case constants.DELETE_JOG:
      return {
        ...state,
        jogs: state.jogs.filter((el) => el.id !== action.id),
      }
    case constants.PUSH_ADD_FORM:
      return {
        ...state,
        distance: action.payload.distance,
        time: action.payload.time,
        date: action.payload.date,
        id: action.payload.id,
        user_id: action.payload.user_id,
        filter: false,
      }
    case constants.CLEAR_ADD_FORM:
      return {
        ...state,
        distance: '',
        time: '',
        date: '',
      }
    case constants.CHANGE_FILTER:
      return {
        ...state,
        [action.name]: new Date(action.value).toISOString(),
      }
    default:
      return state
  }
}
const serviceReducer = (state = initialStateService, action) => {
  switch (action.type) {
    case constants.SET_TOKEN:
      return { ...state, token: action.payload, isAuth: true }
    case constants.TOGGLE_FILTER:
      return { ...state, filter: !state.filter }
    case constants.TOGGLE_MODAL:
      return { ...state, modal: !state.modal, filter: false, modalState: true }
    case constants.SWITCH_MODAL:
      return { ...state, modalState: !state.modalState }
    default:
      return state
  }
}
export { pageReducer, serviceReducer }

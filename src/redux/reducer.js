import * as constants from './constants'
const initialState = {
  jogs: null,
  token: null,
  filter: false,
  modal: false,
  distance: '',
  time: '',
  date: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_TOKEN:
      return { ...state, token: action.payload }
    case constants.SET_JOGS:
      return { ...state, jogs: action.payload }
    case constants.TOGGLE_FILTER:
      return { ...state, filter: !state.filter }
    case constants.TOGGLE_MODAL:
      return { ...state, modal: !state.modal, filter: false }
    case constants.ON_CHANGE:
      return { ...state, [action.name]: action.value }
    case constants.DELETE_JOG:
      return {
        ...state,
        jogs: state.jogs.filter((el) => el.id !== action.id),
      }
    case constants.CLEAR_ADD_FORM:
      return {
        ...state,
        distance: '',
        time: '',
        date: '',
      }
    default:
      return state
  }
}

export default reducer

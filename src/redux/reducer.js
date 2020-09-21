import * as constants from './constants'
const initialStatePage = {
  jogs: [],
  distance: '',
  time: '',
  date: '',
  filterFrom: new Date(0).getTime(),
  filterTo: new Date().getTime(),
}
const initialStateService = {
  filter: false,
  modal: false,
  modalState: true,
  isAuth: false,
  menuIcon: false,
}

const pageReducer = (state = initialStatePage, action) => {
  switch (action.type) {
    case constants.SET_JOGS:
      return {
        ...state,
        jogs: action.payload,
        filterTo: Math.max.apply(
          null,
          action.payload.map((jogs) => jogs.date)
        ),
      }
    case constants.ON_CHANGE:
      return { ...state, [action.name]: action.value }
    case constants.CHANGE_MODAL_DATE:
      return { ...state, date: action.value }
    case constants.DELETE_JOG:
      return {
        ...state,
        jogs: state.jogs.filter((el) => el.id !== action.id),
      }

    case constants.MOBILE_CLICK_JOG:
      return {
        ...state,
        jogs: state.jogs.map((el, key) => {
          if (el.id === action.id) {
            return { ...state.jogs[key], mobile_btn: true }
          } else {
            return { ...state.jogs[key], mobile_btn: false }
          }
        }),
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
    case constants.CHANGE_FILTER_FROM:
      return {
        ...state,
        filterFrom: new Date(action.value).getTime(),
      }
    case constants.CHANGE_FILTER_TO:
      return {
        ...state,
        filterTo: new Date(action.value).getTime(),
      }
    default:
      return state
  }
}
const serviceReducer = (state = initialStateService, action) => {
  switch (action.type) {
    case constants.SET_TOKEN:
      return { ...state, isAuth: true }
    case constants.TOGGLE_FILTER:
      return { ...state, filter: !state.filter }
    case constants.TOGGLE_MODAL:
      return { ...state, modal: !state.modal, filter: false, modalState: true }
    case constants.SWITCH_MODAL:
      return { ...state, modalState: !state.modalState }
    case constants.SWITCH_MENU_ICON:
      return { ...state, menuIcon: !state.menuIcon, filter: false }
    case constants.ADD_ERR:
      return { ...state, error: action.err }
    default:
      return state
  }
}
export { pageReducer, serviceReducer }

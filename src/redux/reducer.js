import { types } from './constants'
const initialStatePage = {
  jogs: [''],
  distance: '',
  time: '',
  date: new Date(0).getTime(),
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
    case types.SET_JOGS:
      return {
        ...state,
        jogs: action.payload,
        filterTo: action.filterTo,
      }
    case types.ON_CHANGE:
      return { ...state, [action.name]: action.value }
    case types.CHANGE_MODAL_DATE:
      return { ...state, date: action.value }
    case types.DELETE_JOG:
      return {
        ...state,
        jogs: state.jogs.filter((el) => el.id !== action.id),
      }

    case types.MOBILE_CLICK_JOG:
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
    case types.PUSH_ADD_FORM:
      return {
        ...state,
        distance: action.payload.distance,
        time: action.payload.time,
        date: action.payload.date,
        id: action.payload.id,
        user_id: action.payload.user_id,
        filter: false,
      }
    case types.CLEAR_ADD_FORM:
      return {
        ...state,
        distance: '',
        time: '',
        date: '',
      }
    case types.CHANGE_FILTER_FROM:
      return {
        ...state,
        filterFrom: action.value,
      }
    case types.CHANGE_FILTER_TO:
      return {
        ...state,
        filterTo: action.value,
      }
    default:
      return state
  }
}
const serviceReducer = (state = initialStateService, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return { ...state, isAuth: true }
    case types.TOGGLE_FILTER:
      return { ...state, filter: !state.filter }
    case types.TOGGLE_MODAL:
      return { ...state, modal: !state.modal, filter: false, modalState: true }
    case types.SWITCH_MODAL:
      return { ...state, modalState: !state.modalState }
    case types.SWITCH_MENU_ICON:
      return {
        ...state,
        menuIcon: !state.menuIcon,
        filter: false,
        modal: false,
      }
    case types.ADD_ERR:
      return { ...state, error: action.err }
    default:
      return state
  }
}
export { pageReducer, serviceReducer }

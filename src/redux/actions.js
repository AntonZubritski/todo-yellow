import ApiArticles from '../services/api-services'
import { types } from './constants'
const api = new ApiArticles()

export const getJogsFetch = () => {
  return (dispatch) => {
    api.fetchApi
      .getJogs()
      .then((info) => {
        dispatch(setJogs(info))
      })
      .catch((err) => {
        dispatch(addErr(err.message))
      })
  }
}
export const logInFetch = () => {
  return (dispatch) => {
    api.fetchApi
      .logToken()
      .then((token) => {
        api.set_token(token.response.access_token)
        localStorage.setItem('jwt', token.response.access_token)
        dispatch(setToken())
      })
      .catch((err) => {
        dispatch(addErr(err.message))
      })
  }
}
export const postJogFetch = (distance, time, date) => {
  const jog = {
    distance: distance,
    time: time,
    date: date,
  }
  return (dispatch) => {
    api.fetchApi
      .postJog(jog)
      .then(() => {
        dispatch(getJogsFetch())
        dispatch(modalActive())
        dispatch(clearAddForm())
      })
      .catch((err) => {
        dispatch(addErr(err.message))
      })
  }
}
export const editJogFetch = (obj) => {
  const jog = {
    distance: obj.distance,
    time: obj.time,
    date: new Date(obj.date).toLocaleDateString(),
    jog_id: obj.id,
    user_id: obj.user_id,
  }
  return (dispatch) => {
    api.fetchApi
      .editJog(jog)
      .then(() => {
        dispatch(getJogsFetch())
        dispatch(modalActive())
        dispatch(clearAddForm())
        dispatch(switchModalState())
      })
      .catch((err) => {
        dispatch(addErr(err.message))
      })
  }
}

export const deleteJogFetch = (id, userId) => {
  const user = {
    jog_id: id,
    user_id: userId,
  }
  return (dispatch) => {
    api.fetchApi
      .deleteJog(user)
      .then(() => {
        dispatch(deleteJog(id))
      })
      .catch((err) => {
        dispatch(addErr(err.message))
      })
  }
}
export const cancelButton = () => {
  return (dispatch) => {
    dispatch(modalActive())
    dispatch(clearAddForm())
    dispatch(switchModalState())
  }
}
export const editButton = (payload) => {
  return (dispatch) => {
    dispatch(pushAddForm(payload))
    dispatch(modalActive())
    dispatch(switchModalState())
  }
}
export const setToken = () => ({ type: types.SET_TOKEN })
export const filterActive = () => ({ type: types.TOGGLE_FILTER })
export const modalActive = () => ({ type: types.TOGGLE_MODAL })
const pushAddForm = (payload) => ({ type: types.PUSH_ADD_FORM, payload })
const switchModalState = () => ({ type: types.SWITCH_MODAL })
const clearAddForm = () => ({ type: types.CLEAR_ADD_FORM })
const deleteJog = (id) => ({ type: types.DELETE_JOG, id })
const addErr = (err) => ({ type: types.ADD_ERR, err })
export const onChange = (name, value) => ({
  type: types.ON_CHANGE,
  name,
  value,
})
const setJogs = (payload) => ({
  type: types.SET_JOGS,
  payload,
  filterTo:
    payload.length !== 0
      ? Math.max.apply(
          null,
          payload.map((jogs) => jogs.date)
        )
      : new Date().getTime(),
})
export const mobileClickJog = (id) => ({
  type: types.MOBILE_CLICK_JOG,
  id,
})
export const changeFilterFrom = (value) => ({
  type: types.CHANGE_FILTER_FROM,
  value: new Date(value).getTime(),
})
export const changeFilterTo = (value) => ({
  type: types.CHANGE_FILTER_TO,
  value: new Date(value).getTime(),
})
export const onChangeModalDate = (value) => ({
  type: types.CHANGE_MODAL_DATE,
  value,
})
export const switchMenuIcon = () => ({
  type: types.SWITCH_MENU_ICON,
})

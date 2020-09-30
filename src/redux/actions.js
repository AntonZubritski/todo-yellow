import ApiArticles from '../services/api-services'
import { types } from './constants'
const api = new ApiArticles()

export const GetJogsFetch = () => {
  return (dispatch) => {
    api.fetchApi
      .getJogs()
      .then((info) => {
        dispatch(SetJogs(info))
      })
      .catch((err) => {
        dispatch(AddErr(err.message))
      })
  }
}
export const LogInFetch = () => {
  return (dispatch) => {
    api.fetchApi
      .logToken()
      .then((token) => {
        api.set_token(token.response.access_token)
        localStorage.setItem('jwt', token.response.access_token)
        dispatch(SetToken())
      })
      .catch((err) => {
        dispatch(AddErr(err.message))
      })
  }
}
export const PostJogFetch = (distance, time, date) => {
  const jog = {
    distance: distance,
    time: time,
    date: date,
  }
  return (dispatch) => {
    api.fetchApi
      .postJog(jog)
      .then(() => {
        dispatch(GetJogsFetch())
        dispatch(ModalActive())
        dispatch(ClearAddForm())
      })
      .catch((err) => {
        dispatch(AddErr(err.message))
      })
  }
}
export const EditJogFetch = (obj) => {
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
        dispatch(GetJogsFetch())
        dispatch(ModalActive())
        dispatch(ClearAddForm())
        dispatch(SwitchModalState())
      })
      .catch((err) => {
        dispatch(AddErr(err.message))
      })
  }
}

export const DeleteJogFetch = (id, userId) => {
  const user = {
    jog_id: id,
    user_id: userId,
  }
  return (dispatch) => {
    api.fetchApi
      .deleteJog(user)
      .then(() => {
        dispatch(DeleteJog(id))
      })
      .catch((err) => {
        dispatch(AddErr(err.message))
      })
  }
}
export const CancelButton = () => {
  return (dispatch) => {
    dispatch(ModalActive())
    dispatch(ClearAddForm())
    dispatch(SwitchModalState())
  }
}
export const EditButton = (payload) => {
  return (dispatch) => {
    dispatch(PushAddForm(payload))
    dispatch(ModalActive())
    dispatch(SwitchModalState())
  }
}
export const SetToken = () => ({ type: types.SET_TOKEN })
export const FilterActive = () => ({ type: types.TOGGLE_FILTER })
export const ModalActive = () => ({ type: types.TOGGLE_MODAL })
const PushAddForm = (payload) => ({ type: types.PUSH_ADD_FORM, payload })
const SwitchModalState = () => ({ type: types.SWITCH_MODAL })
const ClearAddForm = () => ({ type: types.CLEAR_ADD_FORM })
const DeleteJog = (id) => ({ type: types.DELETE_JOG, id })
const AddErr = (err) => ({ type: types.ADD_ERR, err })
export const OnChange = (name, value) => ({
  type: types.ON_CHANGE,
  name,
  value,
})
const SetJogs = (payload) => ({
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
export const MobileClickJog = (id) => ({
  type: types.MOBILE_CLICK_JOG,
  id,
})
export const ChangeFilterFrom = (value) => ({
  type: types.CHANGE_FILTER_FROM,
  value: new Date(value).getTime(),
})
export const ChangeFilterTo = (value) => ({
  type: types.CHANGE_FILTER_TO,
  value: new Date(value).getTime(),
})
export const OnChangeModalDate = (value) => ({
  type: types.CHANGE_MODAL_DATE,
  value,
})
export const SwitchMenuIcon = () => ({
  type: types.SWITCH_MENU_ICON,
})

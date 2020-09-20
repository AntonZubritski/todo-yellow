import {
  SET_TOKEN,
  ADD_AUTH_ERR,
  SET_JOGS,
  TOGGLE_FILTER,
  TOGGLE_MODAL,
  ON_CHANGE,
  CLEAR_ADD_FORM,
  DELETE_JOG,
  PUSH_ADD_FORM,
  SWITCH_MODAL,
  CHANGE_FILTER_FROM,
  CHANGE_FILTER_TO,
  CHANGE_MODAL_DATE,
  MOBILE_CLICK_JOG,
} from './constants'

import ApiArticles from '../services/api-services'
const api = new ApiArticles()

export const GetJogsFetch = () => {
  return (dispatch) => {
    api.fetchApi
      .getJogs()
      .then((info) => {
        dispatch(SetJogs(info))
      })
      .catch((err) => {
        console.log(err)
        dispatch(AddAuthErr(err.message))
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
        dispatch(AddAuthErr(err.message))
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
        console.log(err)
        dispatch(AddAuthErr(err.message))
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
        console.log(err)
        dispatch(AddAuthErr(err.message))
      })
  }
}
export const DeleteJogFetch = (id, userId) => {
  const user = {
    jog_id: id,
    user_id: userId,
  }
  return (dispatch) => {
    api.fetchApi.deleteJog(user).then(() => {
      dispatch(DeleteJog(id))
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
export const OnChange = (name, value) => ({
  type: ON_CHANGE,
  name,
  value,
})
export const SetToken = () => ({ type: SET_TOKEN })
export const FilterActive = () => ({ type: TOGGLE_FILTER })
export const ModalActive = () => ({ type: TOGGLE_MODAL })
const PushAddForm = (payload) => ({ type: PUSH_ADD_FORM, payload })
const SwitchModalState = () => ({ type: SWITCH_MODAL })
const ClearAddForm = () => ({ type: CLEAR_ADD_FORM })
const DeleteJog = (id) => ({ type: DELETE_JOG, id })
const SetJogs = (payload) => ({
  type: SET_JOGS,
  payload,
})
export const MobileClicJog= (id) => ({
  type: MOBILE_CLICK_JOG,
  id
})
const AddAuthErr = (payload) => ({
  type: ADD_AUTH_ERR,
  payload,
})
export const ChangeFilterFrom = (value) => ({
  type: CHANGE_FILTER_FROM,
  value,
})
export const ChangeFilterTo = (value) => ({
  type: CHANGE_FILTER_TO,
  value,
})
export const OnChangeModalDate = (value) => ({
  type: CHANGE_MODAL_DATE,
  value,
})

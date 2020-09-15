import {
  SET_TOKEN,
  ADD_AUTH_ERR,
  SET_JOGS,
  TOGGLE_FILTER,
  TOGGLE_MODAL,
  ON_CHANGE,
  CLEAR_ADD_FORM,
  DELETE_JOG,
} from './constants'

import ApiArticles from '../services/api-services'
const api = new ApiArticles()

export const LogInFetch = () => {
  return (dispatch) => {
    api.fetchApi
      .logToken()
      .then((token) => {
        dispatch(SetToken(token.response.access_token))
        localStorage.setItem('jwt', token.response.access_token)
      })
      .catch((err) => {
        dispatch(AddAuthErr(err.message))
      })
  }
}
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
        dispatch(ModalActive())
        dispatch(ClearAddForm())
      })
      .then(
        dispatch(GetJogsFetch())
      )
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

export const OnChange = (name, value) => ({
  type: ON_CHANGE,
  name,
  value,
})
export const FilterActive = () => ({ type: TOGGLE_FILTER })
export const ModalActive = () => ({ type: TOGGLE_MODAL })
const DeleteJog = (id) => ({ type: DELETE_JOG, id })
const ClearAddForm = () => ({ type: CLEAR_ADD_FORM })
const SetJogs = (payload) => ({
  type: SET_JOGS,
  payload,
})
const SetToken = (payload) => ({
  type: SET_TOKEN,
  payload,
})
const AddAuthErr = (payload) => ({
  type: ADD_AUTH_ERR,
  payload,
})

import {
  SET_TOKEN,
  ADD_AUTH_ERR,
  SET_JOGS,
  TOGGLE_FILTER,
  TOGGLE_MODAL,
  ON_CHANGE,
  POST_JOG
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
    date: date
  }
  return (dispatch) => {
    api.fetchApi
      .postJog(jog)
      .then((jogBack) => {
        console.log(jogBack);
        dispatch(ModalActive())
        
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
const PostJog = () => ({ type: POST_JOG}) 
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

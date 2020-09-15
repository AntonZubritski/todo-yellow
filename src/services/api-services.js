export default class ApiServices {
  _urlBase = 'https://jogtracker.herokuapp.com/api/v1'
  _dfaultImg = 'https://static.productionready.io/images/smiley-cyrus.jpg'

  _token = null
  setToken = () => (this._token = window.localStorage.getItem('jwt'))

  headers = (token) => {
    return {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    }
  }

  //-------------Template for fetchApi
  templateFetch = async (url, method, body) => {
    const res = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: this.headers(window.localStorage.getItem('jwt')),
    })
    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    return res.json()
  }

  templateJogsFetch = async (url) => {
    const res = await this.templateFetch(url, 'GET')
    return res.response.jogs.map(this._transformJogs)
  }
  //-------------Template for fetchApi END
  fetchApi = {
    logToken: () =>
      this.templateFetch(`${this._urlBase}/auth/uuidLogin`, 'POST', {
        uuid: 'hello'
      }),
    getJogs: () => 
      this.templateJogsFetch(`${this._urlBase}/data/sync`, 'GET'),
    postJog: (body) => 
      this.templateFetch(`${this._urlBase}/data/jog`, 'POST', body),
    deleteJog: (body) => 
      this.templateFetch(`${this._urlBase}/data/jog`, 'DELETE', body),
  }

  // //------Transform Function
  _transformJogs = (jog) => {
    return {
      date: this._transformDate(jog.date),
      distance: jog.distance,
      id: jog.id,
      time: jog.time,
      user_id: jog.user_id,
    }
  }
  _transformDate = (created) => {
    const day = new Date(created * 1000).toLocaleString('en', { day: '2-digit' })
    const month = new Date(created * 1000).toLocaleString('en', { month: '2-digit' })
    const year = new Date(created * 1000).getFullYear()
    return `${day}.${month}.${year}`
  }
  //------Transform Function END
}
import axios from 'axios'

const postRquest = (url, data) => {
  return axios.post(url, data).then(response => {
    if (response.status === 400 || response.status === 500 || response.status === 401) { throw response.data }
    return response.data
  }).catch(err => {
    throw err[1]
  })
}

const getRequest = (url, filters) => {
  return axios.get(url, {
    params: filters
  }).then(response => {
    if (response.status === 400 || response.status === 500 || response.status === 401) { throw response.data }
    return response.data
  }).catch(err => {
    throw err[1]
  })
}

const putRequest = (url, data) => {
  return axios.put(url, data).then(response => {
    if (response.status === 400 || response.status === 500 || response.status === 401) { throw response.data }
    return response.data
  }).catch(err => {
    throw err[1]
  })
}

const deleteRequest = (url) => {
  return axios.delete(url).then(response => {
    if (response.status === 400 || response.status === 500 || response.status === 401) { throw response.data }
    return response.data
  }).catch(err => {
    throw err[1]
  })
}

export {
  postRquest,
  getRequest,
  putRequest,
  deleteRequest
}

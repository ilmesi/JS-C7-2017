export const REQUEST_AUTH = 'REQUEST_AUTH'
export const RECEIVE_AUTH = 'RECEIVE_AUTH'

export const requestAuth = () => ({
  type: REQUEST_AUTH
})

export const receiveAuth = (json) => ({
  type: RECEIVE_AUTH,
  todos: json
})

export const fetchTodos = () => dispatch => {
  dispatch(requestAuth())
  return fetch('http://localhost:3000/auth')
    .then(response => response.json())
    .then(json => dispatch(receiveAuth(json)))
}

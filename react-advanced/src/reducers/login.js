import * as ActionTypes from '../actions'

const initialState = {
  username: '',
  password: '',
  token: '',
  isFetching: null
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER:
      return {
        ...state,
        username: action.username
      }
    case ActionTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    case ActionTypes.REQUEST_AUTH:
      return {
        ...state,
        isFetching: true
      }
    case ActionTypes.RECEIVE_AUTH:
      return {
        ...state,
        token: action.response.success ? action.response.token : '',
        isFetching: false
      }
    default:
      return state
  }
}

export default loginReducer

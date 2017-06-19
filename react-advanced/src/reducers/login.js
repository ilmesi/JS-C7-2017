import * as ActionTypes from '../actions'

const initialState = {
  username: '',
  token: '',
  isFetching: null
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_AUTH:
      return {
        ...state,
        isFetching: true
      }
    case ActionTypes.RECEIVE_AUTH:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

export default loginReducer

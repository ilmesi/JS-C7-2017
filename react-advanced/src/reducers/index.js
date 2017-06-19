import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import login from './login'

const rootReducer = combineReducers({
  routing,
  auth: login
})

export default rootReducer

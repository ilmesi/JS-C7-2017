import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import login from './login'
//import todos from './todos'

const rootReducer = combineReducers({
//  todos,
  routing,
  auth: login,
})

export default rootReducer

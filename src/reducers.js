import { combineReducers } from 'redux'
import enter from './app/enter/EnterReducer'
import username from './app/enter/EnterUserReducer'

export default combineReducers({
  enter,
  username
})

import { combineReducers } from 'redux'
import enter from './app/enter/EnterReducer'
import username from './app/enter/EnterUserReducer'
import cards from './app/cards/CardsReducer'

export default combineReducers({
  enter,
  cards
})

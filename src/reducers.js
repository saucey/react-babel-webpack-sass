import { combineReducers } from 'redux'
import enter from './app/enter/EnterReducer'
import username from './app/enter/EnterUserReducer'
import cards from './app/cards/CardsReducer'
import game from './app/game/GameReducer'

export default combineReducers({
  enter,
  cards,
  game
})

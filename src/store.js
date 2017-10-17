import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import EnterMiddleware from './app/enter/EnterMiddleware'

export default createStore(
    reducers,
    applyMiddleware(EnterMiddleware)
)
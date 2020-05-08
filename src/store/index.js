import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ReducerCanceled } from './reducers/tables-reducers/canceled'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  canceled: ReducerCanceled
})

export default createStore(rootReducer, applyMiddleware(thunk));
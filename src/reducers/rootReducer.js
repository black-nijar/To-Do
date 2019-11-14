import { combineReducers } from 'redux'
import { toDoReducer } from './toDoReducer';

export const rootReducer = combineReducers({
  toDo: toDoReducer
})
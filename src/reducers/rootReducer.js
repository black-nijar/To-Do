import { combineReducers } from 'redux'
import { toDoReducer } from './toDoReducer';
import { activityReducer } from './activityReducer';
import { currentStateReducer } from './currentStateReducer';

export const rootReducer = combineReducers({
  toDo: toDoReducer,
  activity: activityReducer,
  currentState: currentStateReducer
})
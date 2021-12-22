/* eslint-disable import/no-duplicates */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './mission/missionApi';
import RocketsReducer from './rockets/Rockets';

const reducer = combineReducers({
  rockets: RocketsReducer,
  missionReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;

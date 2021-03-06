import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './mission/reducer/Reducer';
import rocketReducer from './rockets/reducer/Rockets';

const reducer = combineReducers({
  rockets: rocketReducer,
  missionReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;

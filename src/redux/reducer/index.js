import {combineReducers} from 'redux';
import odometerReducer from './odometer';

const rootReducer = combineReducers({
  odometerReducer,
});

export default rootReducer;

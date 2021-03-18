import {combineReducers} from 'redux';
import location from './location';
import weather from './weather';
import forecast from './forecast';
export default combineReducers({location, weather, forecast});
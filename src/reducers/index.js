// Set up your root reducer here...
import { combineReducers } from 'redux';
import game from './gameReducer';
import controls from './controlsReducer';

export default combineReducers({
	game,
	controls,
});
import { COLUMNS } from '../constants';
import { UPDATE_SETTING, TOGGLE_SETTING } from '../constants/actionTypes';

const initialState = {
	columns: COLUMNS,
	highlightNewborn: true,
	speed: 0,
	toroidal: true,
	view: 'controls',
};

export default function boardReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_SETTING:
			return {
				...state,
				[action.setting]: action.value,
			};
		case TOGGLE_SETTING:
			return {
				...state,
				[action.setting]: !state[action.setting],
			};
		default:
			return state;
	}
}

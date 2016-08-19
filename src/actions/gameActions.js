import {
	AUTO_RUN,
	CLEAR_BOARD,
	GENERATE_BOARD,
	RUN_STEP,
	SET_PATTERN,
	TOGGLE_CELL,
	TOGGLE_PLAY,
	TOGGLE_SETTING,
	UPDATE_SETTING,
} from '../constants/actionTypes';

export const autoRun = () => ({
	type: AUTO_RUN,
});

export const clearBoard = () => ({
	type: CLEAR_BOARD,
});

export const generateBoard = (columns, pattern = 'Custom', random = false, isRunning = false) => ({
	type: GENERATE_BOARD,
	columns,
	pattern,
	random,
	isRunning,
});

export const runStep = () => ({
	type: RUN_STEP,
});

export const setPattern = (pattern) => ({
	type: SET_PATTERN,
	pattern,
});

export const toggleCell = (row, column) => ({
	type: TOGGLE_CELL,
	row,
	column,
});

export const togglePlay = () => ({
	type: TOGGLE_PLAY,
});

export const toggleSetting = (setting) => ({
	type: TOGGLE_SETTING,
	setting,
});

export const updateSetting = (setting, value) => ({
	type: UPDATE_SETTING,
	setting,
	value,
});
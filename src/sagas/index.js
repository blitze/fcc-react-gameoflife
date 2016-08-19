import { delay, takeEvery, takeLatest } from 'redux-saga';
import { call, fork, put, select, take } from 'redux-saga/effects';
import {
	AUTO_RUN,
	CLEAR_BOARD,
	NEXT_GENENERATION,
	RUN_STEP,
	SET_PATTERN,
	TOGGLE_PLAY,
} from '../constants/actionTypes';
import * as actions from '../actions/gameActions';

const isRunning = (state) => state.game.isRunning;
const highlightNewborn = (state) => state.controls.highlightNewborn;
const getColumns = (state) => state.controls.columns;
const getSpeed = (state) => state.controls.speed;
const getArrayType = (state) => state.controls.toroidal;

function* clearBoard() {
	const columns = yield select(getColumns);
	yield put(actions.generateBoard(columns));
}

function* runStep() {
	yield put({
		type: NEXT_GENENERATION,
		toroidal: yield select(getArrayType),
		highlightNewborn: yield select(highlightNewborn),
	});
}

function* runSimulation() {
	while (true) {	// eslint-disable-line no-constant-condition
		const speed = yield select(getSpeed);
		yield call(delay, speed);
		if (yield select(isRunning)) {
			yield put({
				type: NEXT_GENENERATION,
				toroidal: yield select(getArrayType),
				highlightNewborn: yield select(highlightNewborn),
			});
		} else {
			break;
		}
	}
}

function* setPattern(action) {
	const columns = yield select(getColumns);
	yield put(actions.generateBoard(columns, action.pattern, true, false));
}

function* autoRun() {
	yield take(AUTO_RUN);
	yield put({
		type: TOGGLE_PLAY,
	});
}

export default function* rootSaga() {
	yield [
		fork(autoRun),
		fork(takeLatest, TOGGLE_PLAY, runSimulation),
		fork(takeEvery, RUN_STEP, runStep),
		fork(takeLatest, CLEAR_BOARD, clearBoard),
		fork(takeEvery, SET_PATTERN, setPattern)
	];
}
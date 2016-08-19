import { COLUMNS } from '../constants';
import {
	GENERATE_BOARD,
	NEXT_GENENERATION,
	RUN_STEP,
	TOGGLE_CELL,
	TOGGLE_PLAY,
} from '../constants/actionTypes';
import getPatternInfo from '../utils/patterns';

const initialState = {
	board: generateBoard(),
	generations: 0,
	pattern: 'Random',
	isRunning: false,
};

export default function boardReducer(state = initialState, action) {
	switch (action.type) {
		case GENERATE_BOARD: {
			const columns = action.columns;
			const rows = getRows(columns);

			let liveCells = [];
			if (action.pattern) {
				liveCells = getPatternInfo(action.pattern, Math.floor(rows / 2), Math.floor(columns / 2));
			}
			return {
				...state,
				board: generateBoard(action.columns, action.random, liveCells),
				generations: 0,
				pattern: action.pattern,
				isRunning: action.isRunning !== undefined ? action.isRunning : state.isRunning,
			};
		}
		case NEXT_GENENERATION:
			return {
				...state,
				board: getNextGeneration(state.board, action.toroidal, action.highlightNewborn),
				generations: state.generations + 1,
			};
		case RUN_STEP:
			return {
				...state,
				isRunning: false,
			};
		case TOGGLE_PLAY:
			return {
				...state,
				isRunning: !state.isRunning,
			};
		case TOGGLE_CELL: {
			const { row, column } = action;
			return {
				...state,
				board: toggleCellStatus(state.board, row, column),
			};
		}
		default:
			return state;
	}
}

function getStatus(value) {
	const statusMap = ['dead', 'alive'];
	return statusMap[value];
}

function getRows(columns) {
	const rowsMap = {
		40: 30,
		70: 50,
		100: 70,
	};

	return rowsMap[columns];
}

function generateBoard(cols = COLUMNS, random = true, liveCells = []) {
	const rows = getRows(cols);
	return Array.from({ length: rows }, (y, r) =>
		Array.from({ length: cols }, (x, c) => {
			const id = Math.random();
			const value = ((random && !liveCells.length && id > 0.5) || (liveCells.length && liveCells.includes(`${r},${c}`))) ? 1 : 0;
			return {
				id,
				value,
				status: getStatus(value),
			};
		}
	));
}

function toggleCellStatus(board, row, column) {
	const value = !board[row][column].value ? 1 : 0;
	const affectedColumn = {
		...board[row][column],
		status: (value && !board[row][column].value) ? 'newborn' : getStatus(value),
		value,
	};

	const affectedRow = [
		...board[row].slice(0, column),
		affectedColumn,
		...board[row].slice(column + 1)
	];
	return [
		...board.slice(0, row),
		affectedRow,
		...board.slice(row + 1)
	];
}

function getNextGeneration(board, toroidal, highlightNewborn) {
	const maxRows = board.length;
	const maxCols = board[0].length;

	return Array.from({ length: maxRows }, (y, r) =>
		Array.from({ length: maxCols }, (x, c) => {
			let allFieldSum = 0;
			allFieldSum += getCellValue(board, maxRows, maxCols, toroidal, r - 1, c - 1);	// top left
			allFieldSum += getCellValue(board, maxRows, maxCols, toroidal, r - 1, c);		// top center
			allFieldSum += getCellValue(board, maxRows, maxCols, toroidal, r - 1, c + 1);	// top right
			allFieldSum += getCellValue(board, maxRows, maxCols, toroidal, r, c - 1);		// center left
			allFieldSum += board[r][c].value;												// self
			allFieldSum += getCellValue(board, maxRows, maxCols, toroidal, r, c + 1);		// center right
			allFieldSum += getCellValue(board, maxRows, maxCols, toroidal, r + 1, c - 1);	// bottom left
			allFieldSum += getCellValue(board, maxRows, maxCols, toroidal, r + 1, c);		// bottom center
			allFieldSum += getCellValue(board, maxRows, maxCols, toroidal, r + 1, c + 1);	// bottom right
	
			let value = 0;
			if (allFieldSum === 3) {
				value = 1;
			} else if (allFieldSum === 4) {
				value = board[r][c].value;
			}
	
			return new Object({
				...board[r][c],
				value,
				status: (value && !board[r][c].value && highlightNewborn) ? 'newborn' : getStatus(value),
			});
		}
	));
}

function getCellValue(board, maxRows, maxCols, toroidal, row, col) {
	if (toroidal) {
		row = row < 0 ? maxRows - 1 : (row === maxRows ? 0 : row);
		col = col < 0 ? maxCols - 1 : (col === maxCols ? 0 : col);
	}

	try {
		return board[row][col].value;
	} catch (err) {
		return 0;
	}
}
import React, { PropTypes } from 'react';
import Cell from './Cell';

const Board = ({ board, cellSize, pattern, generations, onCellClicked }) => (
	<div>
		<div className="panel">
			<div className="generations bg">
				Generations: <span>{generations}</span>
			</div>
			<div className="generator bg">
				{pattern}
			</div>
		</div>
		<div className="panel bg">
			<div className="board" style={{width: board[0].length * cellSize}}>
				{board.map((rowAr, row) => {
					return rowAr.map((cell, col) => {
						return (<Cell
							key={cell.id}
							{...cell}
							column={col}
							row={row}
							size={cellSize}
							onClick={onCellClicked}
						/>);
					});
				})}
			</div>
		</div>
	</div>
);

Board.propTypes = {
	board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
		status: PropTypes.string.isRequired,
	}))).isRequired,
	generations: PropTypes.number.isRequired,
	pattern: PropTypes.string.isRequired,
	cellSize: PropTypes.number.isRequired,
	onCellClicked: PropTypes.func.isRequired,
};

export default Board;
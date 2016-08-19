import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { autoRun, toggleCell } from '../actions/gameActions';
import Board from '../components/Board';

const cellSizeMap = {
	40: 20,
	70: 12,
	100: 8.5,
};

class GameBoard extends React.Component {
	componentDidMount() {
		this.props.autoRun();
	}
	render() {
		return (
			<Board {...this.props} />
		);
	}
}

GameBoard.propTypes = {
	board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
		status: PropTypes.string.isRequired,
	}))).isRequired,
	cellSize: PropTypes.number.isRequired,
	generations: PropTypes.number.isRequired,
	pattern: PropTypes.string.isRequired,
	onCellClicked: PropTypes.func.isRequired,
	autoRun: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	board: state.game.board,
	cellSize: cellSizeMap[state.controls.columns],
	generations: state.game.generations,
	pattern: state.game.pattern,
});

const mapDispatchToProps = (dispatch) => ({
	onCellClicked: (event) => {
		dispatch(toggleCell(+event.target.dataset.row, +event.target.dataset.column));
	},
	autoRun: () => dispatch(autoRun()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
import React, { PropTypes } from 'react';

const Cell = ({ column, row, status, size, onClick }) => {
	const style = {
		width: size,
		height: size,
	};

	return (
		<div
			className={`cell ${status}`}
			style={style}
			data-column={column}
			data-row={row}
			onClick={onClick}
		/>
	);
};

Cell.propTypes = {
	status: PropTypes.string.isRequired,
	column: PropTypes.number.isRequired,
	row: PropTypes.number.isRequired,
	size: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default Cell;
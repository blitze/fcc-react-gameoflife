import React, { PropTypes } from 'react';
import getPatternInfo from '../utils/patterns';

const patterns = getPatternInfo();

const Patterns = (props) => (
	<div className="patterns scrollbars">
		<a href="#" onClick={props.onClick}>Random</a>
	{patterns.map((pattern, k) => (
		<a key={k} href="#" onClick={props.onClick}>{pattern}</a>
	))}
	</div>
);

Patterns.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default Patterns;
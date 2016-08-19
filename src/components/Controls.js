import React, { PropTypes } from 'react';
import Patterns from './Patterns';

const Controls = (props) => {
	const className = "reveal" + (props.view === 'controls' ? ' active' : '');
	let togglePlay;
	if (props.isRunning) {
		togglePlay = {
			icon: 'fa-pause',
			label: 'Pause',
		};
	} else {
		togglePlay = {
			icon: 'fa-play',
			label: 'Run',
		};
	}
	return (
		<div className={className}>
			<div className="control" onClick={props.onTogglePlayClick}>
				<span className="fa-stack fa-lg">
					<i className="fa fa-circle fa-stack-2x" />
					<i className={`fa ${togglePlay.icon} fa-stack-1x fa-inverse`} />
				</span><br />
				{togglePlay.label}
			</div>
			<div className="control" onClick={props.onStepClick}>
				<span className="fa-stack fa-lg">
					<i className="fa fa-circle fa-stack-2x" />
					<i className="fa fa-step-forward fa-stack-1x fa-inverse" />
				</span><br />
				Next
			</div>
			<div className="control" onClick={props.onClearClick}>
				<span className="fa-stack fa-lg">
					<i className="fa fa-circle fa-stack-2x" />
					<i className="fa fa-ban fa-stack-1x fa-inverse" />
				</span><br />
				Clear
			</div>
			<Patterns
				onClick={props.onPatternClick}
			/>
		</div>
	);
};

Controls.propTypes = {
	isRunning: PropTypes.bool.isRequired,
	view: PropTypes.string.isRequired,
	onTogglePlayClick: PropTypes.func.isRequired,
	onStepClick: PropTypes.func.isRequired,
	onPatternClick: PropTypes.func.isRequired,
	onClearClick: PropTypes.func.isRequired,
};

export default Controls;
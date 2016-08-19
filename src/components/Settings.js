import React, { PropTypes } from 'react';

const outputMap = {
	grid: {
		40: '40x30',
		70: '70x50',
		100: '100x70',
	},
	speed: {
		0: 'Fast',
		500: 'Medium',
		1000: 'Slow',
	},
};

const Settings = (props) => {
	const className = "reveal" + (props.view === 'settings' ? ' active' : '');
	return (
		<div className={className}>
			<div className="row">
				<div className="col">
					<div className="form-control">
						<label>Grid:</label>
						<input
							type="range"
							id="columns"
							min="40"
							max="100"
							step="30"
							defaultValue={props.columns}
							onChange={props.onSettingsChange}
							list="sizes"
						/>
						<datalist id="sizes">
							<option>40</option>
							<option>70</option>
							<option>100</option>
						</datalist>
						<output htmlFor="sizes">{outputMap.grid[props.columns]}</output>
					</div>
					<div className="form-control">
						<input
							type="checkbox"
							id="highlightNewborn"
							checked={props.highlightNewborn}
							onChange={props.onToggleSettings}
						/> Highlight new born 
					</div>
				</div>
				<div className="col">
					<div className="form-control">
						<label>Speed:</label>
						<input
							type="range"
							id="speed"
							min="0"
							max="1000"
							step="500"
							defaultValue={props.speed}
							onChange={props.onSettingsChange}
							list="speeds"
						/>
						<datalist id="speeds">
							<option>1000</option>
							<option>500</option>
							<option>0</option>
						</datalist>
						<output htmlFor="speed">{outputMap.speed[props.speed]}</output>
					</div>
					<div className="form-control">
						<input
							type="checkbox"
							id="toroidal"
							checked={props.toroidal}
							onChange={props.onToggleSettings}
						/> Toroidal (continuous borders) 
					</div>
				</div>
			</div>
		</div>
	);
};

Settings.propTypes = {
	columns: PropTypes.number.isRequired,
	speed: PropTypes.number.isRequired,
	highlightNewborn: PropTypes.bool.isRequired,
	toroidal: PropTypes.bool.isRequired,
	view: PropTypes.string.isRequired,
	onSettingsChange: PropTypes.func.isRequired,
	onToggleSettings: PropTypes.func.isRequired,
};

export default Settings;
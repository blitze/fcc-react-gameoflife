import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/gameActions';
import Controls from '../components/Controls';
import Settings from '../components/Settings';
import Menu from '../components/Menu';
import About from '../components/About';

const menuItems = [{
	icon: 'fa-home',
	target: 'controls',
	title: 'Controls',
}, {
	icon: 'fa-cog',
	target: 'settings',
	title: 'Settings',
}, {
	icon: 'fa-question',
	target: 'about',
	title: 'About',
}];

const GameControls = (props) => (
	<div className="panel bg actions">
		<Controls {...props} />
		<Settings {...props} />
		<About view={props.view} />
		<Menu
			items={menuItems}
			view={props.view}
			onMenuItemClick={props.onMenuItemClick}
		/>
	</div>
);

GameControls.propTypes = {
	columns: PropTypes.number.isRequired,
	highlightNewborn: PropTypes.bool.isRequired,
	speed: PropTypes.number.isRequired,
	toroidal: PropTypes.bool.isRequired,
	view: PropTypes.string.isRequired,
	onToggleSettings: PropTypes.func.isRequired,
	onSettingsChange: PropTypes.func.isRequired,
	onMenuItemClick: PropTypes.func.isRequired,
	onPatternClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	columns: state.controls.columns,
	highlightNewborn: state.controls.highlightNewborn,
	speed: state.controls.speed,
	toroidal: state.controls.toroidal,
	view: state.controls.view,
	isRunning: state.game.isRunning,
});

const mapDispatchToProps = (dispatch) => ({
	onTogglePlayClick: () => {
		dispatch(actions.togglePlay());
	},
	onStepClick: () => {
		dispatch(actions.runStep());
	},
	onClearClick: () => {
		dispatch(actions.clearBoard());
	},
	onMenuItemClick: (item) => () => {
		dispatch(actions.updateSetting('view', item));
	},
	onPatternClick: (event) => {
		event.preventDefault();
		dispatch(actions.setPattern(event.target.innerText));
	},
	onToggleSettings: (event) => {
		dispatch(actions.toggleSetting(event.target.id));
	},
	onSettingsChange: (event) => {
		const prop = event.target.id;
		const value = +event.target.value;
		dispatch(actions.updateSetting(prop, value));
		if (prop === 'columns') {
			dispatch(actions.generateBoard(value));
		}
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(GameControls);
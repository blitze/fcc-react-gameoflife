import React, { PropTypes } from 'react';

const ToggleSettings = ({ icon, onClick }) => (
	<i
		id="showSettings"
		className={"toggle-settings fa " + icon}
		onClick={onClick}
	/>
);

ToggleSettings.propTypes = {
	icon: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default ToggleSettings;


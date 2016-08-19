import React, { PropTypes } from 'react';

const Menu = ({ view, items, onMenuItemClick }) => (
	<ul className="menu">
	{items.map((item, idx) => (
		<li
			key={idx}
			title={item.title}
			className={view === item.target ? 'active' : ''}
			onClick={onMenuItemClick(item.target)}
		>
			<i className={`fa ${item.icon}`} />
		</li>
	))}
	</ul>
);

Menu.propTypes = {
	view: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.shape({
		icon: PropTypes.string,
		target: PropTypes.string,
		title: PropTypes.string,
    })).isRequired,
    onMenuItemClick: PropTypes.func.isRequired,
};

export default Menu;
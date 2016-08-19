import React, { PropTypes } from 'react';

const About = (props) => {
	const className = "reveal scrollbars" + (props.view === 'about' ? ' active' : '');
	const styles = {
		anchor: {color: '#cc4'},
		text: {textAlign: 'right'},
	};
	return (
		<div className={className}>
			<h3>Conway's Game of Life</h3>
			<p>
				The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. 
				One interacts with the Game of Life by creating an initial configuration and observing how it evolves, 
				or, for advanced "players", by creating patterns with particular properties.
			</p>
			<p style={styles.text}>
				<a target="_blank" style={styles.anchor} href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#cite_note-26">Read More</a>
			</p>
		</div>
	);
};

About.propTypes = {
	view: PropTypes.string.isRequired,
};

export default About;
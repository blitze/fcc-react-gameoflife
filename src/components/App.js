import React from 'react';
import GameBoard from '../containers/GameBoard';
import GameControls from '../containers/GameControls';

const App = () => (
	<div>
		<div className="container">
			<div className="centered">
				<h3 className="logo">Game of Life</h3>
				<GameBoard />
				<GameControls />
			</div>
		</div>
		<div className="footer">
			<div className="social">
				<a href="https://github.com/blitze">
					<span className="fa-stack fa-lg">
						<i className="fa fa-circle fa-stack-2x" />
						<i className="fa fa-github fa-stack-1x fa-inverse" />
					</span>
				</a>
				<a href="https://codepen.io/blitze">
					<span className="fa-stack fa-lg">
						<i className="fa fa-circle fa-stack-2x" />
						<i className="fa fa-codepen fa-stack-1x fa-inverse" />
					</span>
				</a>
			</div>
			Built with React, Redux, and Redux Saga<br />by <a href="https://github.com/blitze">Daniel Achebodt</a>
		</div>
    </div>
);

export default App;
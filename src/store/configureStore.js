import 'babel-polyfill';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const devtools = window.devToolsExtension || (() => f => f);

export default function configureStore(history, initialState) {
	const sagaMiddleware = createSagaMiddleware();

	const middlewares = [
		sagaMiddleware,
	];

	if (process.env.NODE_ENV !== 'production') {
		const reduxImmutableStateInvariant = require('redux-immutable-state-invariant');
		middlewares.push(reduxImmutableStateInvariant());
	}

	const enhancers = [
		applyMiddleware(...middlewares),
		devtools(),
	];

	const store = createStore(
		rootReducer,
		initialState,
		compose(...enhancers)
	);

	sagaMiddleware.run(rootSaga);

	if (module.hot && process.env.NODE_ENV !== 'production') {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers'); // eslint-disable-line global-require
			store.replaceReducer(nextReducer);
		});
	}
	
	return store;
}
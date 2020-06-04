import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { enableBatching } from 'redux-batched-actions';

import AppReducer from './App';
import CallButtonsReducer from './CallButtons';
import CallServicesReducer from './CallServices';
import CallTasksReducer from './CallTasks';
import ToggleModalReducer from './ToggleModal';

const initStore = () => {
	// add the middlewares
	const middlewares = [];
	middlewares.push(thunk);

	// add your reducers here
	const reducers = combineReducers({
		AppReducer,
		CallButtonsReducer,
		CallServicesReducer,
		CallTasksReducer,
		ToggleModalReducer
	});

	// apply the middleware
	let middleware = applyMiddleware(...middlewares);

	// create the store
	return createStore(enableBatching(reducers), middleware);
};

export default initStore;

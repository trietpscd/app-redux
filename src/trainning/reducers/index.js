import { combineReducers } from 'redux';
import status from './status';
import sort from './sort';

const rootReducer = combineReducers ( {
	status,
	sort
})

export default rootReducer;
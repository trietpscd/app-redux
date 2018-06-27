import * as types from '../constants/ActionTypes';

var initialState = {
	name : '',
	status : -1
};

var myReducer = ( state = initialState, action) => {
	switch(action.type) {
		case types.FILTER_TASK_TABLE:
			state.name = action.filter.name.toLowerCase();
			state.status = parseInt(action.filter.status, 10);
			return {...state};

		default:
			return state;
	}
}

export default myReducer;
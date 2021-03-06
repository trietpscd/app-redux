import * as types from '../constants/ActionTypes';

var initialState = "";

var myReducer = ( state = initialState, action) => {
	switch(action.type) {
		case types.SEARCH_KEYWORD:
			state = action.keyword.toLowerCase();
			return state;

		default:
			return state;
	}
}

export default myReducer;
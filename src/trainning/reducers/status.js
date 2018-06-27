import * as type from '../constants/ActionTypes';
var initialState = false

var myReducer = (state = initialState, action) => {
	if( action.type === type.TOGGLE_STATUS ) {
		var status = !state;
		return status;
	}
	return state;
}

export default myReducer;
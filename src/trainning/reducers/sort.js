import * as type from '../constants/ActionTypes';

var initialState = {
	by: 'status',
	value: 1
}

const myReducer = (state = initialState, action) => {
	if (action.type === type.SORT) {
		var { by, value } = action.sort;
		return {
			by: by,
			value: value
		}
	}

	return state;
}

export default myReducer;
import * as types from '../constants/ActionTypes';


var randomStr = () => {
	return Math.floor(Math.random()*0x100).toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
var generateID = () => {
	return randomStr() + randomStr() + '-' + randomStr() + '-' + randomStr() + '-' + randomStr() + '-' + randomStr();
}
var tasks = JSON.parse(localStorage.getItem('tasks'));//object
var initialState = tasks ? tasks : [];
var myReducer = ( state = initialState, action) => {
	switch(action.type) {
		// Task
		case types.TASK_LIST:
			return state;

		case types.ADD_TASK:
			var newTask = {
				id: generateID(),
				name: action.task.name,
				status: action.task.status,
			};
			state.push(newTask);
			localStorage.setItem('tasks',JSON.stringify(state));
			return [...state];

		case types.UPDATE_TASK:
			var taskUpdating = {
				id: action.task.id,
				name: action.task.name,
				status: action.task.status,
			};
			state.forEach( (task,index) => {
				if(task.id === action.task.id ) {
					state[index] = taskUpdating;
				}
			});
			localStorage.setItem('tasks',JSON.stringify(state));
			return [...state];

		case types.DELETE_TASK:
			state.forEach( (task,index) => {
				if(task.id === action.id ) {
					state.splice(index,1);
				}
			});
			localStorage.setItem('tasks',JSON.stringify(state));
			return [...state];

		// status
		case types.UPDATE_STATUS:
			state.forEach( (task,index) => {
				if(task.id === action.id ) {
					task.status = !task.status;
				}
			});
			localStorage.setItem('tasks',JSON.stringify(state));
			return [...state];

		default:
			return state;
	}
}

export default myReducer;
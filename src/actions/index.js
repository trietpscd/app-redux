import * as types from '../constants/ActionTypes';

export const toggleForm = () => {
	return {
		type: types.TOGGLE_FORM
	}
}

export const openForm = () => {
	return {
		type: types.OPEN_FORM
	}
}

export const closeForm = () => {
	return {
		type: types.CLOSE_FORM
	}
}

// task
export const tasks = () => {
	return {
		type: types.TASK_LIST
	}
}

export const addTask = (task) => {
	return {
		type: types.ADD_TASK,
		task
	}
}

export const editTask = (task) => {
	return {
		type: types.EDIT_TASK,
		task
	}
}

export const updateTask = (task) => {
	return {
		type: types.UPDATE_TASK,
		task
	}
}

export const deleteTask = (id) => {
	return {
		type: types.DELETE_TASK,
		id
	}
}

export const clearTask = (task) => {
	return {
		type: types.CLEAR_TASK,
		task
	}
}

// status
export const updateStatus = (id) => {
	return {
		type: types.UPDATE_STATUS,
		id
	}
}

// filter
export const filterTaskTable = (filter) => {
	return {
		type: types.FILTER_TASK_TABLE,
		filter
	}
}

export const searchKeyword = (keyword) => {
	return {
		type: types.SEARCH_KEYWORD,
		keyword
	}
}
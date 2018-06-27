import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editTask from './editTask';
import filterTaskTable from './filterTaskTable';
import searchKeyword from './searchKeyword';


const rootReducer = combineReducers ( {
	tasks,
	isDisplayForm,
	editTask,
	filterTaskTable,
	searchKeyword
})

export default rootReducer;
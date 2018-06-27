import { createStore } from 'redux';
import { status,sort } from './actions/index';
import rootReducer from './reducers/index';

const store = createStore( rootReducer );
// console.log('Default: ',store.getState())

store.dispatch(status());
// console.log('toggle: ',store.getState())

store.dispatch(sort({
	by: 'sort',
	value: -1,
}));
// console.log('Sort: ',store.getState())

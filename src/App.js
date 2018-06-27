import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as TodosAction from './actions/index';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			bySortName : 'name',
			bySortValue : 1,
		}

	}

	toggleForm = () => {
		( this.props.editTask.id && this.props.editTask.id !== null ) ? this.props.openForm() : this.props.toggleForm();
		this.props.clearTask({
			id : '',
			name : '',
			status : false
		});	
	}

	componentWillMount() {
  		// console.log('componentWillMount');
	}
	render() {
		var { bySortName, bySortValue} = this.state;
		var { isDisplayForm } = this.props;
	    return (
			<div className="container">
		        <div className="text-center">
		            <h1>Task Management System</h1>
		            <hr/>
		        </div>
		        <div className="row">
		        	<div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
		            	<TaskForm/>
		            </div>
		            <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
			            <div className="form-group">
			            	<button type="button" className="btn btn-primary " onClick={this.toggleForm}>
			                    <span className="fa fa-plus mr-5 " ></span>Add
			                </button>
			                <button type="button" className="btn btn-danger ml-5" onClick={() => this.onGenerate()}>
			                    Generate Data
			                </button>
			            </div>
		                
		                <Control 
		                	onSearch={this.onSearch}
		                	onSort = {this.onSort}
		                	bySortName = { bySortName }
		                	bySortValue = { bySortValue }
		                />
		                <TaskList/>
		            </div>
		        </div>
		    </div>
	    );
	}
}

var mapStateToProps = (state) => {
	return {
		isDisplayForm: state.isDisplayForm,
		editTask: state.editTask
	}
}

var mapDispatchToProps = (dispatch, props) => {
	return {
		toggleForm: () => {
			dispatch(TodosAction.toggleForm())
		},
		clearTask: (task) => {
			dispatch(TodosAction.clearTask(task))
		},
		openForm: () => {
			dispatch(TodosAction.openForm())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

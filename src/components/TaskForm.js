import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TodosAction from '../actions/index';

class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id : '',
			name : '',
			status : false
		}
	}
	handleClose = () => {
		this.props.closeForm();
	}
	handleChange = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.value;
		if( name === "status" ) {
			value = target.value === "true" ? true : false;
		}
		
		this.setState({
			[name]: value
		});
	}
	onClearForm = () => {
		this.setState({
			id : '',
			name : '',
			status : false
		})
	}
	onSubmitForm = (event) => {
		event.preventDefault();
		( this.state.id ) ? this.props.onUpdateTask(this.state) : this.props.onAddTask(this.state);
		this.handleClose();
		this.onClearForm();
	}
	componentWillMount() {
		console.log('componentWillMount');
	}
	componentWillReceiveProps(nextProps) {
		if( nextProps && nextProps.editTask) {
			this.setState({
				id : nextProps.editTask.id,
				name : nextProps.editTask.name,
				status : nextProps.editTask.status,
			});
		} else {
			this.onClearForm()
		}

	}
	render() {
		if (this.props.isDisplayForm === true) {
		    return (
			    <div className="panel panel-warning">
			        <div className="panel-heading">
			            <h3 className="panel-title">{(this.state.id) ? "Edit" : "Add" }<i className="fa fa-times-circle fl-right" onClick={this.handleClose}></i></h3>
			        </div>
			        <div className="panel-body">
			            <form onSubmit = {this.onSubmitForm}>
			                <div className="form-group">
			                    <label>Name :</label>
			                    <input type="text" className="form-control" 
			                    	name = "name"
			                    	onChange = {this.handleChange}
			                    	value = {this.state.name}
			                    />

			                </div>
			                <label>Status :</label>
			                <select className="form-control" required="required"
			                	name = "status"
		                    	onChange = {this.handleChange}
		                    	value = {this.state.status}
			                >
			                    <option value={true}>Active</option>
			                    <option value={false}>Hide</option>
			                </select>
			                <br/>
			                <div className="text-center">
			                    <button type="submit" className="btn btn-warning"><i className="fa fa-plus mr-5"></i>Save</button>&nbsp;
			                    <button type="button" className="btn btn-danger" 
			                    	onClick = {this.onClearForm}
			                    ><i className="fa fa-times-circle mr-5"></i>Cancel</button>
			                </div>
			            </form>
			        </div>
			    </div>
		    );
		} else {
			return '';
		}
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
		onAddTask: (task) => {
			dispatch(TodosAction.addTask(task));
		},
		onUpdateTask: (task) => {
			dispatch(TodosAction.updateTask(task))
		},
		closeForm: () => {
			dispatch(TodosAction.closeForm())
		},

	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);

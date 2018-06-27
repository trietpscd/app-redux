import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as TodosAction from '../actions/index';

class ListItem extends Component {

	onUpdateStatus = () => {
		this.props.onUpdateStatus(this.props.task.id);
	}

	onEditTask = () => {
		this.props.onOpenForm();
		this.props.onEditTask(this.props.task);
	}
	onDeleteTask = () => {
		this.props.onDeleteTask(this.props.task.id);
	}
	render() {
		var { task, index } = this.props;
	    return (
				<tr key={index + 1 }>
				    <td>{index + 1 }</td>
				    <td>{task.name}</td>
				    <td className="text-center">
				        <span 
				        	className={task.status === true ? "label label-success" : "label label-danger"}
				        	onClick = {this.onUpdateStatus}
				        >
		                    {task.status === true ? "Active" : "Hide"}
		                </span>
				    </td>
				    <td className="text-center">
				        <button type="button" className="btn btn-warning" onClick={this.onEditTask}>
				            <span className="fa fa-pencil mr-5"></span>Edit
				        </button>
				        &nbsp;
				        <button type="button" className="btn btn-danger" onClick={this.onDeleteTask}>
				            <span className="fa fa-trash mr-5"></span>Delete
				        </button>
				    </td>
				</tr>
	    );
	}
}
var mapStateToProps = ( state ) => {
	// console.log('State',state);
    return {
        tasks: state.tasks 
    }
}

var mapDispatchToprops = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(TodosAction.updateStatus(id));
        },
        onEditTask: (task) => {
            dispatch(TodosAction.editTask(task));
        },
        onDeleteTask: (id) => {
            dispatch(TodosAction.deleteTask(id));
        },
        onOpenForm: () => {
        	dispatch(TodosAction.openForm());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToprops)(ListItem);

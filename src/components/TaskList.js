import React, { Component } from 'react';
import _ from 'lodash';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import * as TodosAction from '../actions/index';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1,
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var filter = {
            name: name === 'filterName' ? value : this.props.filterTaskTable.name,
            status: name === 'filterStatus' ? value : this.props.filterTaskTable.status
        }
        this.props.onFilterTaskTable(filter);
        this.setState({
            [name] : value
        });
    }
    filterSearch = (tasks,key) => {
        tasks = _.filter(tasks, (task) => {
            return task.name.toLowerCase().indexOf(key) !== -1;
        })
    }

	render() {
        var { tasks,filterTaskTable,keyword } = this.props;
        var { filterName,filterStatus } = this.state;
        if (filterTaskTable.name) {
            tasks = _.filter(tasks, (task) => {
                return task.name.toLowerCase().indexOf(filterTaskTable.name) !== -1;
            })
        }
        if (keyword) {
            tasks = _.filter(tasks, (task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            })
        }
        if(filterStatus){
            tasks = _.filter(tasks, (task) => {
                if(filterTaskTable.status === -1) {
                    return task;
                } else {
                    return task.status === (filterTaskTable.status === 1 ? true : false);
                }
            })  
        }
        var listItemTemplate = tasks.map( (task,index ) => {
            return <ListItem 
                    key={index} 
                    index = {index} 
                    task = {task}
                />
        })
	    return (
			<div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">S.No</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" 
                                        name="filterName"
                                        onChange={this.onChange}
                                        value={filterName}
                                    />
                                </td>
                                <td>
                                    <select className="form-control"
                                        name="filterStatus"
                                        onChange={this.onChange}
                                        value={filterStatus}
                                    >
                                        <option value={-1}>All</option>
                                        <option value={0}>Hide</option>
                                        <option value={1}>Active</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {listItemTemplate}
                        </tbody>
                    </table>
                </div>
            </div>
	    );
	}
}
var mapStateToProps = ( state ) => {
    return {
        tasks: state.tasks,
        filterTaskTable: state.filterTaskTable,
        keyword: state.searchKeyword
    }
}

var mapDispatchToprops = (dispatch, props) => {
    return {
        // actions: bindActionCreators(TodosAction, dispatch(TodosAction.tasks()))
        deleteTask: () => {
            dispatch(TodosAction.deleteTask());
        },
        onFilterTaskTable: (filter) => {
            dispatch(TodosAction.filterTaskTable(filter))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(TaskList);

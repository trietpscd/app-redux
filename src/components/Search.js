import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TodosAction from '../actions/index';

class Search extends Component {
	constructor(props) {
        super(props);
        this.state = {
            keywords : '',
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [ name ] : value,
        });
    }
    onSearch = (keywords) => {
        this.props.onSearchKeyword(this.state.keywords);
    }
	render() {
        var { keywords } = this.state;
	    return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter keywords..."
                        name="keywords"
                        value={ keywords }
                        onChange = { this.onChange }
                    />
                    <span className="input-group-btn">
                        <button 
                            className="btn btn-primary" 
                            type="button"
                            onClick={this.onSearch}
                        >
                            <span className="fa fa-search mr-5"></span>Search
                        </button>
                    </span>
                </div>
            </div>
	    );
	}
}

var mapStateToProps = ( state ) => {
    return {
        
    }
}

var mapDispatchToprops = (dispatch, props) => {
    return {
        onSearchKeyword: (keywords) => {
            dispatch(TodosAction.searchKeyword(keywords));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToprops)(Search);

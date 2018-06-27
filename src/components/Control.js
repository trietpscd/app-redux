import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
class Control extends Component {
	
	render() {
	    return (
			<div className="row mb-15">
                <Search/>
                <Sort 
                	onSort = {this.props.onSort}
                	bySortName = { this.props.bySortName }
                	bySortValue = { this.props.bySortValue }
                />
            </div>
	    );
	}
}

export default Control;

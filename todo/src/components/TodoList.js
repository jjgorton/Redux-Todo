import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions';

class TodoList extends React.Component {
	state = {
		newItem : ''
	};

	render() {
		return (
			<div>
				<h2>Todo List</h2>
				{this.props.todos && this.props.todos.map((item, index) => <h3>{item.value}</h3>)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos : state.todos
	};
};

export default connect(mapStateToProps, { addItem })(TodoList);

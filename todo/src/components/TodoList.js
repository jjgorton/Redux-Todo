import React from 'react';
import { connect } from 'react-redux';

import { addItem, toggleItem } from '../actions';

class TodoList extends React.Component {
	state = {
		newItem : ''
	};

	handleChanges = (e) => {
		this.setState({
			newItem : e.target.value
		});
	};

	addTask = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.newItem);
		this.setState({ newItem: '' });
	};

	toggleComplete = (value) => {
		this.props.toggleItem(value);
	};

	render() {
		return (
			<div className="todo-list-container">
				<h2>Todo List</h2>
				<ul className="list">
					{this.props.todos &&
						this.props.todos.map((item, index) => (
							<li onClick={() => this.toggleComplete(item.value)}>
								{item.value}
								{item.completed && <p>check</p>}
							</li>
						))}
				</ul>
				<input
					type="text"
					value={this.state.newItem}
					placeholder="Add a new Task"
					onChange={this.handleChanges}
				/>
				<button onClick={this.addTask}>Add Task</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos : state.todos
	};
};

export default connect(mapStateToProps, { addItem, toggleItem })(TodoList);

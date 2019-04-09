import React from 'react';
import { connect } from 'react-redux';

import { addItem, toggleItem, deleteItem } from '../actions';

import './TodoList.css';

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

	deleteTask = (e, value) => {
		e.preventDefault();
		this.props.deleteItem(value);
	};

	render() {
		return (
			<div className="todo-list-container">
				<h2>Todo List</h2>
				<ul className="list">
					{this.props.todos &&
						this.props.todos.map((item, index) => (
							<li onClick={() => this.toggleComplete(item.value)}>
								<div className="check">{item.completed && <i class="fas fa-check" />}</div>
								{item.value}

								<button
									className="delete"
									onClick={(e) => {
										this.deleteTask(e, item.value);
									}}
								>
									X
								</button>
							</li>
						))}
				</ul>
				<input
					type="text"
					value={this.state.newItem}
					placeholder="Add a new Task"
					onChange={this.handleChanges}
				/>
				<button className="add" onClick={this.addTask}>
					Add Task
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos : state.todos
	};
};

export default connect(mapStateToProps, { addItem, toggleItem, deleteItem })(TodoList);

import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM } from '../actions';

const initialState = {
	todos : [
		{
			value     : 'Walk the dog.',
			completed : false
		}
	]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				todos : [
					...state.todos,
					{
						value     : action.payload,
						completed : false
					}
				]
			};
		case TOGGLE_ITEM:
			return {
				...state,
				todos : state.todos.map((item) => {
					if (item.value === action.payload) {
						return {
							...item,
							completed : !item.completed
						};
					} else {
						return item;
					}
				})
			};
		case DELETE_ITEM:
			return {
				...state,
				todos : state.todos.filter((item) => {
					if (item.value !== action.payload) {
						return {
							...item
						};
					}
				})
			};
		default:
			return state;
	}
};

export default reducer;

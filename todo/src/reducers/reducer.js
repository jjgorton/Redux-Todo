import { ADD_ITEM } from '../actions';

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
		default:
			return state;
	}
};

export default reducer;

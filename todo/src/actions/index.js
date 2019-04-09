export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (newItem) => {
	console.log(newItem);
	return {
		type    : ADD_ITEM,
		payload : newItem
	};
};

export const TOGGLE_ITEM = 'TOGGLE_ITEM';

export const toggleItem = (value) => {
	return {
		type    : TOGGLE_ITEM,
		payload : value
	};
};

export const DELETE_ITEM = 'DELETE_ITEM';

export const deleteItem = (value) => {
	return {
		type    : DELETE_ITEM,
		payload : value
	};
};

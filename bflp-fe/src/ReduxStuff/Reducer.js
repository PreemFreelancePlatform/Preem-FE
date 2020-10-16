const initialState = {
	isLoading: false,
	user: [],
};

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SUCCESS':
			return {
				...state,
				user: action.payload,
			};

		default:
			return state;
	}
};

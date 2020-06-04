const initialState = {
	loading: false,
};

export default (state = initialState, action: any) => {
	if (action.type === 'abc') {
		return state;
	}
	return state;
};
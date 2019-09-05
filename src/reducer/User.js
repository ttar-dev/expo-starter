const INITIAL_STATE = {};

const USER = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_USER':
			state = action.User;
			return (state = action.User);
		default:
			return state;
	}
};
export default USER;

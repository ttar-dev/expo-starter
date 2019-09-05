const INITIAL_STATE = {
	isVisible: true,
	text: 'App initialization'
};

const OVERLAY = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'asyncOverlay':
			state = action.payload;
			return (state = action.payload);
		default:
			return state;
	}
};
export default OVERLAY;

const initialState = {
	isMuted: false,
	isWebcamOff: false,
	isBackCamera: false,
};

export default (state = initialState, action: any) => {
	if (action.type === 'TOGGLE_MIC') {
		state = {...state, isMuted: !state.isMuted};
	}

	if (action.type === 'TOGGLE_VIDEO') {
		state = {...state, isWebcamOff: !state.isWebcamOff};
	}

	if (action.type === 'TOGGLE_CAMERA_DIRECTION') {
		state = {...state, isBackCamera: !state.isBackCamera};
	}

	console.log('callButtons state', state)

	return state;
};
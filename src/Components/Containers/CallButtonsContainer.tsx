import { connect } from 'react-redux';
import CallButtons from '../CallButtons';
import { toggleMic, toggleVideo, toggleCameraDirection } from '../Actions';

const mapStateToProps = (state: any) => {
	return {
		isMuted: state.CallButtonsReducer.isMuted,
		isWebcamOff: state.CallButtonsReducer.isWebcamOff,
		isBackCamera: state.CallButtonsReducer.isBackCamera,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		toggleMic: () => dispatch(toggleMic()),
		toggleVideo: () => dispatch(toggleVideo()),
		toggleCameraDirection: () => dispatch(toggleCameraDirection()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CallButtons);
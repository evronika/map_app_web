import { connect } from 'react-redux';
import PreviewCamera from '../PreviewCamera';

const mapStateToProps = (state: any) => {
	return {
		isMuted: state.CallButtonsReducer.isMuted,
		isWebcamOff: state.CallButtonsReducer.isWebcamOff,
	};
};
const mapDispatchToProps = () => {
	return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(PreviewCamera);
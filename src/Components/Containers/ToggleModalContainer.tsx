import { connect } from 'react-redux';
import ToggleModal from '../ToggleModal';
import { toggleModal } from "../Actions";

const mapStateToProps = (state: any) => {
    return {
        isOpenModal: state.ToggleModalReducer.isOpenModal
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        toggleModal: () => dispatch(toggleModal())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToggleModal);
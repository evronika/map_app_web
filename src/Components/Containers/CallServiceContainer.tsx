import { connect } from 'react-redux';
import Services from '../Services';
import { createService, getServices, getService, deleteService, updateService } from '../Actions';

const mapStateToProps = (state: any) => {
    return {
        services: state.CallServicesReducer.services
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        createService: (data: {}) => dispatch(createService(data)),
        getServices: () => dispatch(getServices()),
        getService: (id: string) => dispatch(getService(id)),
        deleteService: (id: string) => dispatch(deleteService(id)),
        updateService: (data: {}) => dispatch(updateService(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Services);
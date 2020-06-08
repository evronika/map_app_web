import { connect } from 'react-redux';
import AddTask from '../AddTask';
import { changeDescription, changeLocation, changeService, cleanAddFormData } from "../Actions";

const mapStateToProps = (state: any) => {
    return {
        location: state.AddTaskReducer.location,
        description: state.AddTaskReducer.description,
        serviceName: state.AddTaskReducer.serviceName,
        serviceId: state.AddTaskReducer.serviceId
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeDescription: (data: any) => dispatch(changeDescription(data)),
        changeLocation: (data: any) => dispatch(changeLocation(data)),
        changeService: (data: any) => dispatch(changeService(data)),
        cleanData: () => dispatch(cleanAddFormData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
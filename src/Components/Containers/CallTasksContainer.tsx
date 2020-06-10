import { connect } from 'react-redux';
import Tasks from '../Tasks';
import { createTask, getTasks, deleteTask, updateTask, getServiceById} from '../Actions';

const mapStateToProps = (state: any) => {
    return {
        tasks: state.CallTasksReducer.tasks
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        createTask: (data: any) => dispatch(createTask(data)),
        getTasks: () => dispatch(getTasks()),
        deleteTask: (id: string) => dispatch(deleteTask(id)),
        updateTask: (data: any) => dispatch(updateTask(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
import React, { Component } from 'react';
import {Button, Col, Row} from "react-bootstrap";
import ToggleModal from "./Containers/ToggleModalContainer";
import SimpleMap from "./GoogleMap";
import * as Icon from "react-bootstrap-icons";

type Props = {
    tasks: [],
    createTask?: any,
    getTasks?: any,
    deleteTask?: any,
    updateTask?: any,
    getServiceInfo?: any,
}

class Tasks extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.renderTasks = this.renderTasks.bind(this);
    }

    componentDidMount() {
        const { getTasks } = this.props;
        getTasks()
    }

    getServiceInfo: any = (serviceId: string) => {
        const { getServiceInfo } = this.props;
        const service = getServiceInfo(serviceId);
    }

     deleteTask: any = async (taskId: string) => {
        const { deleteTask } = this.props
         await deleteTask(taskId)
    }

    updateTask: any = (taskData: {}) => {
        const { updateTask } = this.props
        updateTask(taskData)
    }

    renderTasks: any = () => {
        let { tasks } = this.props;
        return tasks.map((task: {_id: string, description: string, service_id: string, location: string, service_name: string}, key) => {
            return (
                <div key={key} className='task-wrapper p-2 pr-5 position-relative rounded'>
                    <div className='task-buttons-wrapper position-absolute'>
                        <span>
                            <Icon.PencilSquare size={20} className='mb-2 mr-2'/>
                            <Icon.XCircle size={20} className='mb-2' onClick={() => this.deleteTask(task._id)}/>
                        </span>
                    </div>
                    <div>
                        <span className='position-relative'>
                            <Icon.GeoAlt size={20} className='mb-2 mr-2'/>
                            <span className='inner-text'>{ task.location }</span>
                        </span>
                    </div>
                    <div>
                        <span className='position-relative' onClick={() => this.getServiceInfo(task.service_id)}>
                            <Icon.Info size={25} className='mb-2 mr-2'/>
                            <span className='inner-text'>{ task.description }</span>
                        </span>
                    </div>
                    <div>
                        <span className='position-relative' onClick={() => this.getServiceInfo(task.service_id)}>
                            <Icon.TagFill size={20} className='mb-2 mr-2'/>
                            <span className='inner-text'>{ task.service_name }</span>
                        </span>
                    </div>


                </div>
            )
        })
    }

    render() {
        let { createTask, tasks } = this.props;

        return (
            <Row className='h-100 flex-row'>
                <SimpleMap/>
                <Row className='position-absolute w-100 px-4'>
                    <Col xs={12} lg={3} className='tasks-wrapper pl-lg-5 pt-lg-5'>
                        <h2>
                            <span className='position-relative'>Tasks</span>
                        </h2>
                        <h6 className='d-inline-block'>
                            <span className='position-relative'>
                                {tasks.length === 0 ? 'There are no tasks...yet.' : ''}
                            </span>
                        </h6>
                        {this.renderTasks()}
                    </Col>
                    <Col xs={0} lg={5}>

                    </Col>
                    <ToggleModal createTask = {createTask}/>
                </Row>

            </Row>
        );
    }
}

export default Tasks;
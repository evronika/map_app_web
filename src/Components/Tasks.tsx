import React, { Component } from 'react';
import {Button, Col, Row} from "react-bootstrap";
import ToggleModal from "./Containers/ToggleModalContainer";
import SimpleMap from "./GoogleMap";
import * as Icon from "react-bootstrap-icons";

type Props = {
    tasks: [],
    trash: [],
    createTask?: any,
    getTasks?: any,
    getTrash?: any,
    deleteTask?: any,
    updateTask?: any,
    getServiceInfo?: any,
}

class Tasks extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.renderTasks = this.renderTasks.bind(this);
        this.state = {
            changingIds: [],
            trash: false
        }
    }

    componentDidMount() {
        const { getTasks, getTrash } = this.props;
        getTasks()
        getTrash()
    }

     deleteTask: any = async (taskId: string) => {
        const { deleteTask } = this.props
         await deleteTask(taskId)
    }

    updateTask: any = (task: any) => {
        const { updateTask } = this.props
        this.setState({
            changingIds: (this.state as any).changingIds.filter((value: any) =>  {
                return value !== task._id
            })
        });
        task.location = (document.getElementById(task._id + '-location') as HTMLInputElement).value
        task.description = (document.getElementById(task._id + '-description') as HTMLInputElement).value
        updateTask(task)
    }

    toggleTrash: any = () => {
        this.setState({
            ...this.state,
            trash : !(this.state as any).trash
        })
    }

    handleChange: any = (taskId: string) => {
        this.setState({
            ...this.state,
            changingIds : [...(this.state as any).changingIds, taskId]
        })
    }

    renderTasks: any = (trashIsEnabled: boolean) => {
        let result:[] = [];
        if (!trashIsEnabled) {
            result = this.props.tasks
        } else {
            result = this.props.trash;
        }

        return result.map((task: {_id: string, description: string, service_id: string, location: string, service_name: string}, key) => {
            const isChanging = (this.state as any).changingIds.includes(task._id);
            return (
                <div key={key} className='task-wrapper p-2 pr-5 position-relative rounded'>
                    {
                        trashIsEnabled ? '' :
                            <div className='task-buttons-wrapper position-absolute'>
                                <span>
                                    { isChanging ?
                                        <Icon.Check2 size={25} className='mb-2 mr-2 text-success' onClick={() => this.updateTask(task)}/> :
                                        ''
                                    }
                                    <Icon.PencilSquare size={20} className='mb-2 mr-2 text-primary' onClick={() => this.handleChange(task._id)}/>
                                    <Icon.XCircle size={20} className='mb-2 text-danger' onClick={() => this.deleteTask(task._id)}/>
                                </span>
                            </div>
                    }

                    <div className='mb-1'>
                        <span className='position-relative'>
                            <Icon.GeoAlt size={20} className='mb-2 mr-2'/>
                            { isChanging ?
                                <textarea className='inner-text rounded w-75' id={task._id + '-location'}>
                                { task.location }
                                </textarea> :
                                <span className='inner-text'>{ task.location }</span>
                            }
                        </span>
                    </div>
                    <div className='mb-1'>
                        <span className='position-relative'>
                            <Icon.Info size={25} className='mb-2 mr-2'/>
                            {isChanging ? <textarea className='inner-text rounded w-75' id={task._id + '-description'}>
                                { task.description }
                                </textarea> :
                                <span className='inner-text'>{task.description}</span>
                            }
                        </span>
                    </div>
                    <div className='mb-3'>
                        <span className='position-relative'>
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
        const trashIsEnabled: any = (this.state as any).trash;

        return (
            <Row className='h-100 flex-row'>
                <SimpleMap/>
                <Row className='position-absolute w-100 px-4'>
                    <Col xs={12} lg={4} className='tasks-wrapper pl-lg-5 pt-lg-5'>
                        <h2 className='toggler'>

                            <span className={`${trashIsEnabled ? 'text-primary' : ''} position-relative`}
                                onClick={this.toggleTrash}
                            >Tasks</span>
                            <span className={`${trashIsEnabled ? '' : 'text-primary'} position-relative ml-2`}
                                  onClick={this.toggleTrash}
                            >Trash</span>

                        </h2>
                        <h6 className='d-inline-block'>
                            <span className='position-relative'>
                                {tasks.length === 0 ? 'There are no tasks...yet.' : ''}
                            </span>
                        </h6>
                        {this.renderTasks(trashIsEnabled)}
                    </Col>
                    <Col xs={0} lg={4}>

                    </Col>
                    <ToggleModal createTask = {createTask}/>
                </Row>

            </Row>
        );
    }
}

export default Tasks;
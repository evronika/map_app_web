import React, { Component } from 'react';
import {Col, Row} from "react-bootstrap";
import ToggleModal from "./Containers/ToggleModalContainer";
import SimpleMap from "./GoogleMap";

type Props = {
    tasks: [],
    createTask?: any,
    getTasks?: any,
    deleteTask?: any,
    updateTask?: any,
}

class Tasks extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.renderTasks = this.renderTasks.bind(this);
    }

    renderTasks: any = () => {
        let { tasks } = this.props;
        return tasks.map((task: { description: string }, key) => {
            return (
                <div key={key}>
                    <span className='position-relative'>
                        { task.description }
                    </span>
                </div>
            )
        })
    }

    render() {
        let { createTask, tasks } = this.props;

        return (
            <Row className='h-100 flex-row py-3'>
                <SimpleMap/>
                <Row className='position-absolute w-100 px-4'>
                    <Col xs={12} lg={8} className='tasks-wrapper pl-lg-5 pt-lg-5'>
                        <h2>
                            <span className='position-relative'>Tasks</span>
                        </h2>
                        <h3 className='d-inline-block'>
                            <span className='position-relative'>
                                {tasks.length === 0 ? 'There are no tasks...yet.' : ''}
                            </span>
                        </h3>
                        {this.renderTasks()}
                    </Col>
                    <ToggleModal createTask = {createTask}/>
                </Row>

            </Row>
        );
    }
}

export default Tasks;
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
                    { task.description }
                </div>
            )
        })
    }

    render() {
        let { createTask } = this.props;

        return (
            <Row className='h-100 flex-row py-3'>
                <SimpleMap/>
                <Row className='position-absolute w-100'>
                    <Col xs={12} lg={9}>
                        <h2 className='d-block w-100'>Tasks helper</h2>
                        <h3>A list of tasks will be here.</h3>
                        {this.renderTasks()}
                    </Col>
                    <ToggleModal createTask = {createTask}/>
                </Row>

            </Row>
        );
    }
}

export default Tasks;
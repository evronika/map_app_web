import React, { Component } from 'react';
import {Button, Col} from "react-bootstrap";

import AddTask from "./Containers/AddTaskContainer";

type Props = {
    isOpenModal: boolean,
    toggleModal?: any,
    createTask?: any
}

class ToggleModal extends Component<Props> {

    render() {

        const { toggleModal, isOpenModal, createTask } = this.props;
        return (
            <Col xs={12} lg={4}>
                <div className='position-relative py-3'>

                    { isOpenModal ? <AddTask toggleModal={toggleModal} isOpenModal={isOpenModal} createTask={createTask}/> : '' }
                    <Button variant={'outline-primary'} onClick={toggleModal} className="menu-item--small w-100 toogle-modal-button">
                        { isOpenModal ? 'Close modal' : 'Add Task' }
                    </Button>
                </div>
            </Col>
        );
    }
}

export default ToggleModal;
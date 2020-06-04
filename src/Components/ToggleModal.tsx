import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import Services from "./Containers/CallServiceContainer";

type Props = {
    isOpenModal: boolean,
    toggleModal?: any
}

class ToggleModal extends Component<Props> {

    render() {

        const { toggleModal, isOpenModal } = this.props;
        return (
            <div>
                <Button variant={'tulip-large-primary' as any} onClick={toggleModal}>
                    Add Task
                </Button>
                { isOpenModal ? 'Open' : 'Close' }
                <Services/>
            </div>
        );
    }
}

export default ToggleModal;
import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Button} from "react-bootstrap";
import Services from "./Containers/CallServiceContainer";
import Sidebar from "react-sidebar";

type Props = {
    isOpenModal: boolean,
    toggleModal?: any
}

class ToggleModal extends Component<Props> {

    render() {

        const { toggleModal, isOpenModal } = this.props;
        return (
            <div>
                <Sidebar
                    sidebar={<Services/>}
                    open={isOpenModal}
                    onSetOpen={toggleModal}
                    styles={{ sidebar: { background: "white" } }}
                >
                    <Button variant={'tulip-large-primary' as any} onClick={toggleModal}>
                        Add Task
                    </Button>
                    { isOpenModal ? 'Open' : 'Close' }
                    <Services/>
                </Sidebar>
            </div>
        );
    }
}

export default ToggleModal;
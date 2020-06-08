import React, { Component } from 'react';
import Services from "./Containers/CallServiceContainer";
import * as Icon from 'react-bootstrap-icons';
import {Button, Form} from "react-bootstrap";

type Props = {
    toggleModal: any,
    isOpenModal: any,
    location?: string,
    serviceName?: string,
    serviceId?: string,
    description?: string,
    changeDescription?: any
    changeLocation?: any
    changeService?: any
    createTask?: any
    cleanData?: any
}

class AddTask extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.onChangeLocation = this.onChangeLocation.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeService = this.onChangeService.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeLocation: any = (data: any) => {
        const { changeLocation } = this.props;
        changeLocation(data.target.value);
    }

    onChangeDescription: any = (data: any) => {
        const { changeDescription } = this.props;
        changeDescription(data.target.value);
    }

    onChangeService: any = (data: any) => {
        const { changeService } = this.props;
        const serviceName  = data.target.getAttribute('data-name');
        changeService(serviceName);
    }

    onSubmit: any = (event: any) => {
        event.preventDefault()
        const { createTask, location, description, serviceName, serviceId, cleanData } = this.props;
        const object: {} = {
            location: location,
            description: description,
            serviceName: serviceName,
            serviceId: serviceId,
        }
        createTask(object)
        cleanData()
    }


    render() {

        const { toggleModal, location, serviceName, description } = this.props;

        return (
            <div className='sidebar position-absolute bg-light w-100 px-3 py-3'>
                <Icon.X size={30} onClick={toggleModal} className='close-sidebar-button mb-2 position-absolute'/>
                <div className='mb-4'>
                    <h3 className='text-center'>Task info</h3>
                    <div className='d-flex mb-2'>
                        <div className='mr-2'>Service:</div>
                        <div className='font-weight-bold'>{serviceName}</div>
                    </div>
                    <div className='d-flex mb-2'>
                        <div className='mr-2'>Location:</div>
                        <div className='font-weight-bold'>{location}</div>
                    </div>
                    <div className='d-flex'>
                        <div className='mr-2'>Additional Info:</div>
                        <div className='font-weight-bold'>{description}</div>
                    </div>
                </div>
                <div className='services-wrapper d-flex justify-content-center flex-wrap'>
                    <Services onServiceChange={this.onChangeService}/>
                </div>
                <Form noValidate onSubmit={this.onSubmit}>
                    <Form.Group className='d-flex my-3 mx-0'>
                        <Button variant={"outline-primary"} className='sidebar-button'>Use current location</Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Address" onChange={this.onChangeLocation} value={location}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='sidebar-label mt-3'>Additional information</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={this.onChangeDescription} value={description}/>
                    </Form.Group>

                    <Button type="submit" variant={"outline-primary"} className='sidebar-button w-100'>Submit</Button>
                </Form>

            </div>

        );
    }
}

export default AddTask;
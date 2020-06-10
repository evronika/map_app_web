import React, { Component, useState } from 'react';
import Services from "./Containers/CallServiceContainer";
import * as Icon from 'react-bootstrap-icons';
import {Button, Form, Col, InputGroup} from "react-bootstrap";

type Props = {
    toggleModal: any,
    isOpenModal: any,
    location?: string,
    serviceName?: string,
    serviceId?: string,
    description?: string,
    validated: boolean,
    changeDescription?: any
    changeLocation?: any
    changeService?: any
    createTask?: any
    cleanData?: any
    setValidated?: any
}

class AddTask extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.onChangeLocation = this.onChangeLocation.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeService = this.onChangeService.bind(this)
        this.submitTask = this.submitTask.bind(this)
    }

    onChangeLocation: any = (data: any) => {
        const { changeLocation } = this.props;
        changeLocation(data.target.value);
    }

    onChangeDescription: any = (data: any) => {
        const { changeDescription } = this.props;
        changeDescription(data.target.value);
    }

    onChangeService: any = (id: string, name: string) => (event: any) => {
        const { changeService } = this.props;
        let box: any = document.getElementById('services-wrapper')
        box.classList.remove('invalid')
        let obj = {
            serviceName: name,
            serviceId: id
        }
        changeService(obj);
    }

    submitTask: any = (event: any) => {
        event.preventDefault();
        const { createTask, location, description, serviceName, serviceId, cleanData, setValidated } = this.props;
        const object: {} = {
            location: location,
            description: description,
            service_name: serviceName,
            service_id: serviceId,
        }
        createTask(object).then((res: any) => {
            if (res.data) {
                setValidated();
                cleanData()
            } else {
                console.log('ERROR: The task is not created. Please try again.', res)
            }
        })
    }

    validateRadioButtons = () => {
        const { serviceId } = this.props;
        if (serviceId === '') {
            return false
        } else {
            return true
        }
    }

    handleSubmit = (event: any) => {

        const { setValidated } = this.props;
        const form = event.currentTarget;
        let box: any = document.getElementById('services-wrapper')
        if (this.validateRadioButtons()) {
            box.classList.remove('invalid')
        } else {
            box.classList.add('invalid')
        }
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        this.submitTask(event)
    };



    render() {
        const { toggleModal, location, serviceName, description, validated } = this.props;

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
                <Form noValidate validated={validated} onSubmit={this.handleSubmit} className='form-wrapper'>
                    <Form.Row>
                        <Form.Group as={Col} xs="12" controlId="validationCustom00">
                            <div id='services-wrapper' className='services-wrapper d-flex justify-content-center flex-wrap'>
                                <Services onServiceChange={this.onChangeService} selectedService={serviceName}/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} xs="12" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Location"
                                value={location}
                                onChange={this.onChangeLocation}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} xs="12" controlId="validationCustom02">
                            <Form.Label>Additional info</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                placeholder=""
                                value={description}
                                onChange={this.onChangeDescription}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit" variant={"outline-primary"} className='sidebar-button w-100'>Submit</Button>
                </Form>

            </div>

        );
    }
}

export default AddTask;
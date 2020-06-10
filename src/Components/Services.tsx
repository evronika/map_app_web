import React, { Component } from 'react';
import {Button, Form, Image} from 'react-bootstrap';
import Cook from '../Assets/cook.svg';
import Electricity from '../Assets/electricity.svg';
import Gardener from '../Assets/gardener.svg';
import Housekeeper from '../Assets/housekeeper.svg';
import Plumbing from '../Assets/plumbing.svg';
import Location from '../Assets/location.svg';

type Props = {
    services: [],
    onServiceChange?: any
    getServices?: any,
    selectedService?: any
}

class Services extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.renderSwitch = this.renderSwitch.bind(this)
    }

    componentDidMount = () => {
        const { getServices } = this.props;
        getServices()
    };

    renderSwitch(service: { name: string, _id: string }, key : any) {
        const { onServiceChange, selectedService } = this.props;
        const name: string = service.name.charAt(0).toUpperCase() + service.name.slice(1);
        let image: any;
        let checked: boolean = false;
        let selectedClass = name === selectedService ? 'selected-service' : '';
        switch (name) {
            case 'Cook':
                checked = true;
                image = (
                    <Image src={Cook} className='my-2' onClick={() => onServiceChange(service._id, name)}/>
                );
                break;
            case 'Electricity':
                image = (
                    <Image src={Electricity} className='my-2' onClick={() => onServiceChange(service._id, name)}/>
                );
                break;
            case 'Gardener':
                image = (
                    <Image src={Gardener} className='my-2' onClick={() => onServiceChange(service._id, name)}/>
                );
                break;
            case 'Housekeeper':
                image = (
                    <Image src={Housekeeper} className='my-2' onClick={() => onServiceChange(service._id, name)}/>
                );
                break;
            case 'Plumbing':
                image = (
                    <Image src={Plumbing} className='my-2' onClick={() => onServiceChange(service._id, name)}/>
                );
                break;
            case 'Location':
                image = (
                    <Image src={Location} className='my-2' onClick={() => onServiceChange(service._id, name)}/>
                );
                break;
        }
        return (
            <Button className={`position-relative service-button ${selectedClass}`} key={key} onClick={() => onServiceChange(service._id, name)}>
                <Form.Check
                    type="radio"
                    id={name}
                    value={name}
                    name='services'
                    className='radio-wrapper invisible'
                    checked={checked}
                />
                { image }
                <p onClick={() => onServiceChange(service._id, name)}>{ name }</p>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Button>
            )


    }

    render() {
        let { services } = this.props;

        return (
            services.map((service: { name: string, _id: string}, key) => {
                return this.renderSwitch(service, key)
            })
        );
    }
}

export default Services;
import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';
import Cook from '../Assets/cook.svg';
import Electricity from '../Assets/electricity.svg';
import Gardener from '../Assets/gardener.svg';
import Housekeeper from '../Assets/housekeeper.svg';
import Plumbing from '../Assets/plumbing.svg';
import Location from '../Assets/location.svg';

type Props = {
    services: [],
    onServiceChange?: any
    getServices?: any
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
        const { onServiceChange } = this.props;
        const name: string = service.name.charAt(0).toUpperCase() + service.name.slice(1);
        let image: any;
        switch (name) {
            case 'Cook':
                image = (
                    <Image src={Cook} className='my-2' data-name={name} data-id={service._id}/>
                );
                break;
            case 'Electricity':
                image = (
                    <Image src={Electricity} className='my-2' data-name={name} data-id={service._id}/>
                );
                break;
            case 'Gardener':
                image = (
                    <Image src={Gardener} className='my-2' data-name={name} data-id={service._id}/>
                );
                break;
            case 'Housekeeper':
                image = (
                    <Image src={Housekeeper} className='my-2' data-name={name} data-id={service._id}/>
                );
                break;
            case 'Plumbing':
                image = (
                    <Image src={Plumbing} className='my-2' data-name={name} data-id={service._id}/>
                );
                break;
            case 'Location':
                image = (
                    <Image src={Location} className='my-2' data-name={name} data-id={service._id}/>
                );
                break;
        }
        return <Button className='service-button' key={key} onClick={onServiceChange}
                       data-name={name} data-id={service._id}>
            { image }
            <p data-name={name} data-id={service._id}>{ name }</p>
        </Button>
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
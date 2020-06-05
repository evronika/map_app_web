import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';
import Cook from '../Assets/cook.svg';
import Electricity from '../Assets/electricity.svg';
import Gardener from '../Assets/gardener.svg';
import Housekeeper from '../Assets/housekeeper.svg';
import Plumbing from '../Assets/plumbing.svg';

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

    renderSwitch(service: { name: string }, key : any) {
        const { onServiceChange, getServices } = this.props;
        const name: string = service.name.charAt(0).toUpperCase() + service.name.slice(1);
        switch (name) {
            case 'Plumbing':
                return <Button className='service-button' key={key} onClick={getServices} data-name={name}>
                    <Image src={Plumbing} className='my-2' data-name={name}/>
                    <p data-name={name}>{ name }</p>
                </Button>
            case 'Cook':
                return <Button className='service-button' key={key} onClick={onServiceChange} data-name={name}>
                    <Image src={Cook} className='my-2' data-name={name}/>
                    <p data-name={name}>{ name }</p>
                </Button>
            case 'Electricity':
                return <Button className='service-button' key={key} onClick={onServiceChange} data-name={name}>
                    <Image src={Electricity} className='my-2' data-name={name}/>
                    <p data-name={name}>{ name }</p>
                </Button>
            case 'Gardener':
                return <Button className='service-button' key={key} onClick={onServiceChange} data-name={name}>
                    <Image src={Gardener} className='my-2' data-name={name}/>
                    <p data-name={name}>{ name }</p>
                </Button>
            case 'Housekeeper':
                return <Button className='service-button' key={key} onClick={onServiceChange} data-name={name}>
                    <Image src={Housekeeper} className='my-2' data-name={name}/>
                    <p data-name={name}>{ name }</p>
                </Button>
            default:
                return ;
        }
    }

    render() {
        let { services } = this.props;
        (services as any) = [
            {name: 'plumbing'},
            {name: 'cook'},
            {name: 'electricity'},
            {name: 'gardener'},
            {name: 'housekeeper'},
            {name: 'location'}
            ]

        return (
            services.map((service: { name: string }, key) => {
                return this.renderSwitch(service, key)
            })
        );
    }
}

export default Services;
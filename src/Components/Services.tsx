import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';
import Cook from '../Assets/cook.svg';
import Electricity from '../Assets/electricity.svg';
import Gardener from '../Assets/gardener.svg';
import Housekeeper from '../Assets/housekeeper.svg';
import Location from '../Assets/location.svg';
import Plumbing from '../Assets/plumbing.svg';

type Props = {
    services: []
}

class Services extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.renderSwitch = this.renderSwitch.bind(this)
    }

    renderSwitch(name: string) {
        switch (name.toLowerCase()) {
            case 'plumbing':
                return <Button className='webcam-button phone-button'>
                    <Image src={Plumbing}/>
                </Button>
            case 'cook':
                return <Button className='webcam-button phone-button'>
                    <Image src={Cook}/>
                </Button>
            case 'electricity':
                return <Button className='webcam-button phone-button'>
                    <Image src={Electricity}/>
                </Button>
            case 'gardener':
                return <Button className='webcam-button phone-button'>
                    <Image src={Gardener}/>
                </Button>
            case 'housekeeper':
                return <Button className='webcam-button phone-button'>
                    <Image src={Housekeeper}/>
                </Button>
            case 'location':
                return <Button className='webcam-button phone-button'>
                    <Image src={Location}/>
                </Button>
            default:
                return ;
        }
    }

    render() {
        const { services } = this.props;

        return (
            services.map((service: { name:string }, key) => {
                return this.renderSwitch(service.name)
            })
        );
    }
}

export default Services;
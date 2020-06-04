import React, { Component } from 'react';
import {Container, Row, ResponsiveEmbed, Col } from 'react-bootstrap';
import Webcam from 'react-webcam';
import CallButtons from '../../Components/Containers/CallButtonsContainer';
import Draggable from 'react-draggable';
import './styles.scss';

class RoomPage extends Component {
	private isOnly: boolean;

	constructor(props: any) {
		super(props);
		this.isOnly = true;
	}

	componentDidMount() {
		setTimeout(() => {
			this.isOnly = false;
			this.forceUpdate();
		}, 5000);
	}

	render() {

		return (
			<Container className='vh-100 text-center mx-0 px-0 overflow-hidden' fluid>
				<Row className='h-100 align-items-center mx-0 px-0'>
					<Col md className='mx-0 px-0 h-100'>
						<Draggable bounds='parent'>
							<ResponsiveEmbed aspectRatio='4by3' className={`h-100 d-none small-view-finder position-absolute ${this.isOnly ? 'd-none' : 'd-block'}`}>
								<Webcam videoConstraints={{ facingMode: 'user' }}/>
							</ResponsiveEmbed>
						</Draggable>
						<ResponsiveEmbed aspectRatio='4by3' className='h-100 view-finder rounded-0'>
							<Webcam className='rounded-0 h-100' videoConstraints={{ facingMode: 'user' }}/>
						</ResponsiveEmbed>
						<div className={`webcam-button-wrapper room ${this.isOnly ? '' : 'not-only'}`}>
							<p className={this.isOnly ? 'd-block' : 'd-none'}>No one else is in the chat</p>
							<CallButtons mic={true} webcam={true} switchCamera={true} endCall={true}/>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default RoomPage;
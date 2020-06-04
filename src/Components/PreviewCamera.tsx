import React, { Component } from 'react';
import { ResponsiveEmbed, Col } from 'react-bootstrap';
import Webcam from 'react-webcam';
import CallButtons from './Containers/CallButtonsContainer';

type Props = {
	isMuted?: boolean,
	isWebcamOff?: boolean,
}

class PreviewCamera extends Component<Props> {
	render() {
		const { isMuted } = this.props;

		return (
			<Col xs={12} lg={8} className='mx-0 px-0 video-wrapper pr-lg-5'>
				<ResponsiveEmbed aspectRatio='4by3' className='view-finder h-100'>
					<Webcam videoConstraints={{ facingMode: 'user' }} audio={isMuted}/>
				</ResponsiveEmbed>
				<div className='webcam-button-wrapper pr-lg-5'>
					<CallButtons mic={true} webcam={true}/>
				</div>
			</Col>
		);
	}
}

export default PreviewCamera;
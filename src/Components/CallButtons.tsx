import React, { Component } from 'react';
import { Button, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MicIconWhite from '../Assets/micIconWhite.svg';
import VideoIconWhite from '../Assets/videoIconWhite.svg';
import MicIconBlack from '../Assets/micIconBlack.svg';
import VideoIconBlack from '../Assets/videoIconBlack.svg';
import PhoneIconWhite from '../Assets/phoneIconWhite.svg';
import ArrowIconWhite from '../Assets/arrowIconWhite.svg';

type Props = {
	isMuted?: boolean,
	isWebcamOff?: boolean,
	toggleMic?: any,
	toggleVideo?: any,
	toggleCameraDirection?: any
	mic?: boolean,
	webcam?: boolean,
	switchCamera?: boolean,
	endCall?: boolean,
	endCallFunction?: any 
}

class CallButtons extends Component<Props> {
	render() {
		const { toggleMic, toggleVideo, toggleCameraDirection, isMuted, isWebcamOff, mic, webcam, switchCamera, endCall, endCallFunction } = this.props;

		return (
			<Container>
				{mic ?
					(<Button className='webcam-button' onClick={toggleMic} active={isMuted}>
						{isMuted ? (<Image src={MicIconBlack}/>) : (<Image src={MicIconWhite}/>)}
					</Button>) : (<Container />)}
				{webcam ?
					(<Button className='webcam-button' onClick={toggleVideo} active={isWebcamOff}>
						{isWebcamOff ? (<Image src={VideoIconBlack}/>) : (<Image src={VideoIconWhite}/>)}
					</Button>) : (<Container />)}
				{switchCamera ?
					(<Button className='webcam-button d-md-none' onClick={toggleCameraDirection}>
						<Image src={ArrowIconWhite}/>
					</Button>) : (<Container />)}
				{endCall ?
					(<Button className='webcam-button phone-button' onClick={endCallFunction}>
						<Link to='/left'>
							<Image src={PhoneIconWhite}/>
						</Link>
					</Button>) : (<Container />)}
			</Container>
		);
	}
}

export default CallButtons;
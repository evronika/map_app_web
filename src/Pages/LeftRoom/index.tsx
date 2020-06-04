import React, { Component } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import Logo from '../Expired/Assets/logo.svg';
import { Link } from 'react-router-dom';

class LeftRoomPage extends Component {
	render() {
		return (
			<Container className='text-center'>
				<Image src={Logo} style={{ width: '88px' }}/>
				<br/>
				<p>You&apos;ve left the chat</p>
				<br/>
				<Button variant={'tulip-large-primary' as any}>
					<Link to='/room'>
						Rejoin Video Chat
					</Link>
				</Button>
			</Container>
		);
	}
}

export default LeftRoomPage;
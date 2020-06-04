import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import Logo from './Assets/logo.svg';

class ExpiredPage extends Component {
	render() {
		return (
			<Container className='text-center'>
				<Image src={Logo} style={{ width: '88px' }}/>
				<h3>Link Expired</h3>
				<p>This session has expired. Initiate a new video chat from Live Connect.</p>
			</Container>
		);
	}
}

export default ExpiredPage;
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.scss';
import Header from "../Common/header";
import Footer from "../Common/footer";

class Preview extends Component {
	render() {
		return (
			<Container className='vh-100' fluid>
				<Header/>
				<Row className='h-100 align-items-lg-center align-items-start flex-row my-0 py-0'>

					<Col xs={12} className='text-center mx-0 px-0'>
						<h2 className='d-none d-lg-inline-block'>Tasks helper</h2>
						<p>No one is in the chat</p>
						<br className='d-none d-lg-block'></br>
						<Button variant={'tulip-large-primary' as any}>
							<Link to='/room'>
								Join Video Chat
							</Link>
						</Button>
					</Col>
				</Row>
				<Footer/>
			</Container>
		);
	}
}

export default Preview;
import React, { Component } from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import './styles.scss';
import Header from "../Common/header";
import Footer from "../Common/footer";
import Tasks from "../../Components/Containers/CallTasksContainer";
import ToggleModal from "../../Components/Containers/ToggleModalContainer";

class Map extends Component {

	render() {

		return (
			<Container className='vh-100' fluid>
				<Header/>
				<Row className='h-100 align-items-start flex-row my-5'>

					<Col xs={12} className='text-center'>
						<Row>
							<h2 className='d-block w-100 text-center'>Tasks helper</h2>
						</Row>
						<Row>
							<Col xs={12} lg={8}>
								<h3>A list of tasks will be here.</h3>
								<Tasks/>
							</Col>
							<Col xs={12} lg={4}>
								<ToggleModal/>
							</Col>
						</Row>

					</Col>
					<Col>
						<Row>
							<Form>
								Test
							</Form>
						</Row>
					</Col>
				</Row>
				<Footer/>
			</Container>
		);
	}
}

export default Map;
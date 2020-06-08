import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import './styles.scss';
import Header from "../Common/header";
import Footer from "../Common/footer";
import Tasks from "../../Components/Containers/CallTasksContainer";

class Map extends Component {

	render() {

		return (
			<Container className='vh-100' fluid>
				{/*<Header/>*/}
				<Tasks/>
				{/*<Footer/>*/}
			</Container>
		);
	}
}

export default Map;
import React, { Component } from "react";
import PropTypes from 'prop-types';

import Header from "../header";
import Main from "../main";


class App extends Component {
    constructor(props){
        super(props);
        this.state = props.store;
    }
    getChildContext(){
        return {
            store : this.props.store
        }
    }
    render() {
        return(
            <div>
                <Header/>
                <Main/>
            </div>
            )
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
}

App.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default App;
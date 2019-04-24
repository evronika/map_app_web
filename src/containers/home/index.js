import React, { Component } from "react";
import { push } from "connected-react-router"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from "../../modules/counter"
import PropTypes from "prop-types";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {props};
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>

                <p>
                    <button onClick={this.state.increment}>Increment</button>
                    <button onClick={this.state.incrementAsync} disabled={this.state.isIncrementing}>Increment Async</button>
                </p>

                <p>
                    <button onClick={this.state.decrement}>Decrementing</button>
                    <button onClick={this.state.decrementAsync} disabled={this.state.isDecrementing}>Decrement Async</button>
                </p>

                <p><button onClick={() => this.state.changePage()}>Go to history page via redux</button></p>

            </div>
    );
    }
}

const mapStateToProps = ({ counter }) => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    changePage: () => push("/history")
}, dispatch)

Home.contextTypes = {
    store: PropTypes.object
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

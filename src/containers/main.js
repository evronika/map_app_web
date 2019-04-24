import React, { Component } from "react";
import { Route, Switch } from "react-router-dom"

import Home from "./home"
import Dashboard from "./dashboard"
import History from "./history"
import Whoops from "./whoops"


class Main extends Component {
    render() {

        return (
            <div className="content">
                <Switch>
                    <Route exact path="/index/" component={Home} />
                    <Route path="/dashboard/" component={Dashboard} />
                    <Route path="/history/" component={History} />
                    <Route component={Whoops} />
                </Switch>
            </div>
        );
    }
}


export default Main;
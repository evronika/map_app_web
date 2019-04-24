import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import { store, history } from "./index-store"
import App from "./containers/app/index";
import "./css/index.css"



ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <div>
                <App store={store}/>
            </div>
        </Router>
    </Provider>
), document.getElementById("root"))

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Pages from 'Pages';
import Store from 'Components/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'Styles/styles.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store()}>
            <Router>
        
                <Switch>
                    {Pages.map((route, key) => (
                        <Route
                            key={key}
                            path={route.path}
                            render={(routeProps) => <route.component {...routeProps} />}
                            exact={Object.prototype.hasOwnProperty.call(route, 'exact')}
                        />
                    ))}
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
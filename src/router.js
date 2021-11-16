import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/login/login';
import App from './App';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
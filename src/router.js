import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/login/login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" exact component={Login} /> */}
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
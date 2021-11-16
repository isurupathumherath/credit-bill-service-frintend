import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './api/privateRoutes';

import Login from './components/login/login';
import App from './App';
import NotFound from './pages/NotFound';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/404' component={NotFound} />
                <PrivateRoute path="/" exact component={App} />
                <Route path="/login" exact component={Login} />
                <Redirect from='*' to='/404' />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
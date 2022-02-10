import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './api/privateRoutes';

import Login from './components/login/login';
import App from './App';
import NotFound from './pages/NotFound';

import {
    AddCustomer,
} from "./pages"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" exact component={App} />
                <PrivateRoute path="/customer/add" exact component={AddCustomer} />

                <Route path="/login" exact component={Login} />
                <Route path='/404' component={NotFound} />

                <Redirect from='*' to='/404' />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './api/privateRoutes';

import Login from './components/login/login';
import App from './App';
import NotFound from './pages/NotFound';
import CustomerAdd from './components/CustomerAdd';

import AddUser from './components/user-management/new-user';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" exact component={App} />
                <Route path="/login" exact component={Login} />

                <Route path="/add" exact component={AddUser} />
                
                <Route path="/AddCus" exact component={CustomerAdd} />
                <Route path='/404' component={NotFound} />
                <Redirect from='*' to='/404' />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
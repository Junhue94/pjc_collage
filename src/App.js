import React from 'react';
import { Switch } from 'react-router-dom';

import LoginLayout from './layouts/LoginLayout/LoginLayout';
import ErrorLayout from './layouts/ErrorLayout/ErrorLayout';
import AppLayout from './layouts/AppLayout/AppLayout';
import Login from './components/Login/Login';
import Error from './components/Error/Error';
import Queue from './components/Queue/Queue';
import Patient from './components/Patient/Patient';
import NotificationSystem from './components/Notification/NotificationSystem';
import CategorySettings from './containers/Settings/Category/Category';
import Aux from './utils/Auxiliary/Auxiliary';

/**
 * App Component
 * @description Routing for application
 */
const App = () => (
    <Aux>
        <NotificationSystem />
        <Switch>
            <LoginLayout path="/login" component={Login} />
            <AppLayout path="/queue" component={Queue} />
            <AppLayout path="/patient/:id" component={Patient} />
            <AppLayout path="/settings/category" component={CategorySettings} />
            <ErrorLayout path="*" component={Error} />
        </Switch>
    </Aux>
);

export default App;

import React from 'react';
import { Switch } from 'react-router-dom';

import HomeLayout from './layouts/HomeLayout/HomeLayout';
import ErrorLayout from './layouts/ErrorLayout/ErrorLayout';
import LoginLayout from './layouts/LoginLayout/LoginLayout';
import AppLayout from './layouts/AppLayout/AppLayout';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import Login from './components/Login/Login';
import Error from './components/Error/Error';
import Queue from './components/Queue/Queue';
import NotificationSystem from './components/Notification/NotificationSystem';
import CategorySettings from './containers/Settings/Category/Category';
import Aux from './utils/Auxiliary/Auxiliary';
import Home from './containers/Home/Home';
import User from './containers/User/User';
import Task from './containers/Task/Task';

/**
 * App Component
 * @description Routing for application
 */
const App = () => (
    <Aux>
        <NotificationSystem />
        <Switch>
            <LoginLayout exact path="/phoenix" component={Login} />
            <DashboardLayout exact path="/pegasus" component={User} />
            <DashboardLayout exact path="/pegasus/task" component={Task} />
            <AppLayout exact path="/queue" component={Queue} />
            <AppLayout exact path="/settings/category" component={CategorySettings} />
            <HomeLayout exact path="/" component={Home} />
            <ErrorLayout path="*" component={Error} />
        </Switch>
    </Aux>
);

export default App;

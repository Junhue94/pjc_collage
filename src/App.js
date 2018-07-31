import React from 'react';
import { Switch } from 'react-router-dom';

import CanvasLayout from './layouts/HomeLayout/CanvasLayout';
import PageLayout from './layouts/HomeLayout/PageLayout';
import ErrorLayout from './layouts/ErrorLayout/ErrorLayout';
import LoginLayout from './layouts/LoginLayout/LoginLayout';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import Login from './containers/Login/Login';
import Error from './components/Error/Error';
import NotificationSystem from './components/Notification/NotificationSystem';
import Aux from './utils/Auxiliary/Auxiliary';
import Home from './containers/Home/Home';
import User from './containers/User/User';
import Task from './containers/Task/Task';
import Faq from './containers/Faq/Faq';
import ContactUs from './containers/ContactUs/ContactUs';

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
            <PageLayout exact path="/faq" component={Faq} />
            <PageLayout exact path="/contact" component={ContactUs} />
            <CanvasLayout exact path="/" component={Home} />
            <ErrorLayout path="*" component={Error} />
        </Switch>
    </Aux>
);

export default App;

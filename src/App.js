import React from 'react';
import { Switch } from 'react-router-dom';

import HomeLayout from './layouts/HomeLayout/HomeLayout';
import ErrorLayout from './layouts/ErrorLayout/ErrorLayout';
import AppLayout from './layouts/AppLayout/AppLayout';
import Error from './components/Error/Error';
import Queue from './components/Queue/Queue';
import NotificationSystem from './components/Notification/NotificationSystem';
import CategorySettings from './containers/Settings/Category/Category';
import Aux from './utils/Auxiliary/Auxiliary';
import Home from './containers/Home/Home';

/**
 * App Component
 * @description Routing for application
 */
const App = () => (
    <Aux>
        <NotificationSystem />
        <Switch>
            <AppLayout path="/queue" component={Queue} />
            <AppLayout path="/settings/category" component={CategorySettings} />
            <HomeLayout path="/" component={Home} />
            <ErrorLayout path="*" component={Error} />
        </Switch>
    </Aux>
);

export default App;

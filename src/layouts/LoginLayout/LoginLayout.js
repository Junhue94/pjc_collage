import React from 'react';
import { Route } from 'react-router-dom';

const LoginLayout = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <div>
                <Component {...matchProps} />
            </div>
        )}
    />
);

export default LoginLayout;

import React from 'react';
import { Route } from 'react-router-dom';

/**
 * Login Layout Component
 * @param Component
 * @param rest
 * @see https://simonsmith.io/reusing-layouts-in-react-router-4/
 */
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

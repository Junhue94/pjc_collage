import React from 'react';
import { Route } from 'react-router-dom';

/**
 * Error Layout Component
 * @param Component
 * @param rest
 * @see https://simonsmith.io/reusing-layouts-in-react-router-4/
 */
const ErrorLayout = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <div>
                <div>This is Error Layout</div>
                <Component {...matchProps} />
            </div>
        )}
    />
);

export default ErrorLayout;

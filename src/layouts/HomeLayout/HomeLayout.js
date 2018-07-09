import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const HomeLayout = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <Container
                fluid
            >
                <Component {...matchProps} />
            </Container>
        )}
    />
);

export default HomeLayout;

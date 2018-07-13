import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import styles from './DashboardLayout.scss';

const DashboardLayout = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <Container
                className={styles.container}
            >
                <Component {...matchProps} />
            </Container>
        )}
    />
);

export default DashboardLayout;

import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import styles from './DashboardLayout.scss';
import DashboardMenu from '../../components/Menu/DashboardMenu';

const DashboardLayout = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <Container
                fluid
                className={styles.container}
            >
                <DashboardMenu />
                <Component {...matchProps} />
            </Container>
        )}
    />
);

export default DashboardLayout;

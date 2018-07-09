import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import AppHeader from '../../components/Menu/AppHeader';
import styles from './AppLayout.css';

/**
 * App Layout Component
 * @param Component
 * @param rest
 * @see https://simonsmith.io/reusing-layouts-in-react-router-4/
 */
const AppLayout = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <Container
                fluid
                className={styles.AppLayout}
            >
                <div className={styles.AppHeader}>
                    <AppHeader />
                </div>
                <Component {...matchProps} />
            </Container>
        )}
    />
);

export default AppLayout;

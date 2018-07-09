import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import AppHeader from '../../components/Menu/AppHeader/AppHeader';
import styles from './HomeLayout.scss';

const HomeLayout = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <Container
                fluid
                className={styles.container}
            >
                <AppHeader />
                <Component {...matchProps} />
            </Container>
        )}
    />
);

export default HomeLayout;

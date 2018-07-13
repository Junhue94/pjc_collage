import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import AppHeader from '../../components/Menu/AppHeader';
import styles from './CanvasLayout.scss';

const CanvasLayout = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <Container
                className={styles.container}
            >
                <AppHeader />
                <Component {...matchProps} />
            </Container>
        )}
    />
);

export default CanvasLayout;

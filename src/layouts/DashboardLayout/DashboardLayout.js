import React from 'react';
import { Route } from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react';

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
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <DashboardMenu />
                        </Grid.Column>
                        <Grid.Column width={14}>
                            <Component {...matchProps} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )}
    />
);

export default DashboardLayout;

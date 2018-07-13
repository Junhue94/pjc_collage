import React from 'react';
import { Button, Form, Grid, Segment, Image } from 'semantic-ui-react';

import styles from './Login.scss';
import phoenixIcon from '../../assets/image/phoenixIcon.png';

/**
 * Login Component
 */
const Login = () => (
    <div className={styles.LoginForm}>
        <Grid
            className={styles.Grid}
            textAlign="center"
            verticalAlign="middle"
        >
            <Grid.Column className={styles.GridColumn}>
                <Image
                    className={styles.Icon}
                    src={phoenixIcon}
                    centered
                    size="tiny"
                />
                <Form>
                    <Segment>
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="User"
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                        />
                        <Button
                            color="red"
                            fluid
                            size="large"
                        >Log In
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    </div>
);

export default Login;

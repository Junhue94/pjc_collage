import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import LoginForm from '../../components/Login/LoginForm';
import styles from './Login.scss';
import phoenixIcon from '../../assets/image/phoenixIcon.png';
import actions from '../../store/actions';

class Login extends Component {
    componentDidUpdate() {
        const { loginSuccess, history } = this.props;

        if (loginSuccess) {
            history.push('/pegasus');
        }
    }

    handleLogin = (credentials) => {
        const { createLogin } = this.props;
        createLogin(credentials);
    };

    render() {
        return (
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
                        <LoginForm
                            createLogin={this.handleLogin}
                        />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({ login }) => ({
    loginSuccess: login.success,
});

const mapDispatchToProps = (dispatch) => {
    const { createLogin } = actions.login;

    return {
        createLogin: bindActionCreators(createLogin, dispatch),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

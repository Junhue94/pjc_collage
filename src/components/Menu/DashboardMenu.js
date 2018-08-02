import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Aux from '../../utils/Auxiliary/Auxiliary';
import styles from './DashboardMenu.scss';
import actions from '../../store/actions';

class DashboardMenu extends Component {
    componentDidUpdate() {
        const { logoutSuccess, history } = this.props;

        if (logoutSuccess) {
            history.push('/phoenix');
        }
    }

    handleLogout = () => {
        const { findLogout } = this.props;
        findLogout({});
    };

    render() {
        return (
            <Aux>
                <div className={styles.header}>
                    <Menu size="large" fixed="top">
                        <Menu.Item as={Link} to="/pegasus" name="Users" />
                        <Menu.Item as={Link} to="/pegasus/task" name="Tasks" />
                        <Menu.Menu position="right">
                            <Menu.Item
                                name="Log Out"
                                onClick={this.handleLogout}
                            />
                        </Menu.Menu>
                    </Menu>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = ({ logout }) => ({
    logoutSuccess: logout.success,
});

const mapDispatchToProps = (dispatch) => {
    const { findLogout } = actions.logout;

    return {
        findLogout: bindActionCreators(findLogout, dispatch),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardMenu));

import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Aux from '../../utils/Auxiliary/Auxiliary';

class DashboardMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeMenu: null,
        };
    }

    handleMenuClick = (e, { name }) => this.setState({ activeMenu: name });

    render() {
        const { activeMenu } = this.state;

        return (
            <Aux>
                <Menu
                    icon="labeled"
                    vertical
                >
                    <Menu.Item
                        name="user"
                        active={activeMenu === 'user'}
                        onClick={this.handleMenuClick}
                        as={Link}
                        to="/pegasus"
                    >
                        <Icon name="users" />
                        Users
                    </Menu.Item>
                    <Menu.Item
                        name="task"
                        active={activeMenu === 'task'}
                        onClick={this.handleMenuClick}
                        as={Link}
                        to="/pegasus/task"
                    >
                        <Icon name="tasks" />
                        Tasks
                    </Menu.Item>
                    <Menu.Item
                        name="logOut"
                        active={activeMenu === 'logOut'}
                        onClick={this.handleMenuClick}
                        as={Link}
                        to="/phoenix"
                    >
                        <Icon name="log out" />
                        Log Out
                    </Menu.Item>
                </Menu>
            </Aux>
        );
    }
}

export default DashboardMenu;

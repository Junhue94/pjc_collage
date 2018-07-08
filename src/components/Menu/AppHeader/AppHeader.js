import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';

import Aux from '../../../utils/Auxiliary/Auxiliary';

const AppHeader = () => (
    <Aux>
        <Menu fixed="top">
            <Menu.Item as={Link} to="/queue" name="queue" />
            <Menu.Menu position="right">
                <Dropdown
                    item
                    text="Language"
                >
                    <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        <Dropdown.Item>Chinese</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown
                    item
                    icon="list layout"
                >
                    <Dropdown.Menu>
                        <Dropdown.Header>
                            <Icon name="setting" />
                            Settings
                        </Dropdown.Header>
                        <Dropdown.Item as={Link} to="/settings/category">Category</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/settings/metrics">Metrics</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/settings/templates">Templates</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/settings/forms">Forms</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                            <Icon name="user" />
                            User
                        </Dropdown.Header>
                        <Dropdown.Item as={Link} to="/login">Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    </Aux>
);

export default AppHeader;

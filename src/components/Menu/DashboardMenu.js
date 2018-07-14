import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Aux from '../../utils/Auxiliary/Auxiliary';
import styles from './DashboardMenu.scss';

const DashboardMenu = () => (
    <Aux>
        <div className={styles.header}>
            <Menu size="large" fixed="top">
                <Menu.Item as={Link} to="/pegasus" name="Users" />
                <Menu.Item as={Link} to="/pegasus/task" name="Tasks" />
                <Menu.Menu position="right">
                    <Menu.Item as={Link} to="/phoenix" name="Log Out" />
                </Menu.Menu>
            </Menu>
        </div>
    </Aux>
);

export default DashboardMenu;

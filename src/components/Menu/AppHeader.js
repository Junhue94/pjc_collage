import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Aux from '../../utils/Auxiliary/Auxiliary';
import styles from './AppHeader.scss';

const AppHeader = () => (
    <Aux>
        <div className={styles.header}>
            <Menu size="large" fixed="top">
                <Menu.Item as={Link} to="/" name="Home" />
                <Menu.Menu position="right">
                    <Menu.Item as={Link} to="/contact" name="Contact Us" />
                    <Menu.Item as={Link} to="/faq" name="FAQ" />
                </Menu.Menu>
            </Menu>
        </div>
    </Aux>
);

export default AppHeader;

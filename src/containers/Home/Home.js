import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import Aux from '../../utils/Auxiliary/Auxiliary';
import CollageCanvas from '../../components/Canvas/Collage';
import { MSG_HOME_MAIN_HEADER } from '../../localization/en';
import styles from './Home.scss';
import coneSvg from '../../assets/icon/cone.svg';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeCanvasOption: null,
        };
    }

    handleCanvasOptionsClick = (e, { name }) => this.setState({ activeCanvasOption: name });

    renderCanvasOptions() {
        const { activeCanvasOption } = this.state;

        return (
            <Menu compact icon>
                <Menu.Item
                    name="drawing"
                    active={activeCanvasOption === 'drawing'}
                    onClick={this.handleCanvasOptionsClick}
                >
                    <i className="fa fa-pencil" aria-hidden="true" />
                </Menu.Item>
                <Menu.Item
                    name="text"
                    active={activeCanvasOption === 'text'}
                    onClick={this.handleCanvasOptionsClick}
                >
                    <i className="fa fa-text-width" aria-hidden="true" />
                </Menu.Item>
                <Menu.Item
                    name="image"
                    active={activeCanvasOption === 'image'}
                    onClick={this.handleCanvasOptionsClick}
                >
                    <i className="fa fa-picture-o" aria-hidden="true" />
                </Menu.Item>
                <Menu.Item
                    name="triangle"
                    active={activeCanvasOption === 'triangle'}
                    onClick={this.handleCanvasOptionsClick}
                >
                    <img src={coneSvg} className={styles.svgIcon} alt="cone" />
                </Menu.Item>
                <Menu.Item
                    name="circle"
                    active={activeCanvasOption === 'circle'}
                    onClick={this.handleCanvasOptionsClick}
                >
                    <i className="fa fa-circle" aria-hidden="true" />
                </Menu.Item>
                <Menu.Item
                    name="rectangle"
                    active={activeCanvasOption === 'rectangle'}
                    onClick={this.handleCanvasOptionsClick}
                >
                    <i className="fa fa-square" aria-hidden="true" />
                </Menu.Item>
            </Menu>
        );
    }

    render() {
        return (
            <Aux>
                <div className={styles.mainHeader}>{MSG_HOME_MAIN_HEADER}</div>
                <div className={styles.canvasOptions}>{this.renderCanvasOptions()}</div>
                <CollageCanvas />
            </Aux>
        );
    }
}

export default Home;

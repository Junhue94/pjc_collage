import React, { Component } from 'react';
import { fabric } from 'fabric';

import styles from './Collage.scss';

class CollageCanvas extends Component {
    componentDidMount() {
        const width = 1200;
        const height = 675;
        this.collageCanvas = new fabric.Canvas('collage-canvas', {
            width,
            height,
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <canvas id="collage-canvas" className={styles.canvas} />
            </div>
        );
    }
}

export default CollageCanvas;

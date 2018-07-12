import React, { Component } from 'react';
import { fabric } from 'fabric';
import { Menu, Grid, GridRow, GridColumn, List, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Aux from '../../utils/Auxiliary/Auxiliary';
import PersonalDetailsForm from '../../components/Home/PersonalDetailsForm';
import { MSG_HOME_MAIN_HEADER } from '../../localization/en';
import coneSvg from '../../assets/icon/cone.svg';
import {
    defaultCircle,
    defaultRectangle,
    defaultTriangle,
    defaulIText,
    defaultImage,
} from '../../utils/Canvas/helper';
import styles from './Home.scss';
import actions from '../../store/actions';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeCanvasOption: null,
            canvasDrawing: [],
        };
    }

    componentDidMount() {
        const width = 1120;
        const height = 630;
        this.collageCanvas = new fabric.Canvas('collage-canvas', {
            width,
            height,
        });
    }

    handleCanvasOptionsClick = (e, { name }) => {
        this.setState({ activeCanvasOption: name });
        this.toggleDrawingMode(name);

        switch (name) {
            case 'text':
                this.generateIText();
                break;
            case 'triangle':
                this.drawTriangle();
                break;
            case 'circle':
                this.drawCircle();
                break;
            case 'rectangle':
                this.drawRectangle();
                break;
            case 'undo':
                this.undoDrawing();
                break;
            case 'redo':
                this.redoDrawing();
                break;
            case 'clear':
                this.clearCanvas();
                break;
            default:
        }
    };

    handleImageUpload = (e) => {
        const reader = new FileReader();
        reader.onload = (readerEvent) => {
            const imgObj = new Image();
            imgObj.src = readerEvent.target.result;
            imgObj.onload = () => {
                const image = new fabric.Image(imgObj);
                image.set(defaultImage);
                this.collageCanvas.centerObject(image);
                this.collageCanvas.add(image);
                this.collageCanvas.renderAll();
            };
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    handleCreatePersonalDetails = (personalDetails) => {
        this.props.createPersonalDetails({
            ...personalDetails,
            drawing: this.collageCanvas.toJSON().objects,
        });
        this.setState({ canvasDrawing: [] });
        this.clearCanvas();
    };

    drawCircle = () => {
        this.collageCanvas.add(new fabric.Circle(defaultCircle));
    };

    drawRectangle = () => {
        this.collageCanvas.add(new fabric.Rect(defaultRectangle));
    };

    drawTriangle = () => {
        this.collageCanvas.add(new fabric.Triangle(defaultTriangle));
    };

    generateIText = () => {
        const { text, options } = defaulIText;
        this.collageCanvas.add(new fabric.IText(text, options));
    };

    toggleDrawingMode = (option) => {
        // TODO http://fabricjs.com/freedrawing
        this.collageCanvas.isDrawingMode = (option === 'drawing');
    };

    undoDrawing = () => {
        if (this.collageCanvas._objects.length > 0) {
            const undoObject = this.collageCanvas._objects.pop();
            this.setState(prevState => ({
                canvasDrawing: [...prevState.canvasDrawing, undoObject],
            }));
            this.collageCanvas.renderAll();
        }
    };

    redoDrawing = () => {
        if (this.state.canvasDrawing.length > 0) {
            const redoObject = this.state.canvasDrawing.pop();
            this.collageCanvas.add(redoObject);
        }
    };

    clearCanvas = () => {
        this.collageCanvas.clear();
    };

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
                <label htmlFor="imageUpload" className={styles.canvasOption}>
                    <Menu.Item
                        name="image"
                        active={activeCanvasOption === 'image'}
                        onClick={this.handleCanvasOptionsClick}
                    >
                        <i className="fa fa-picture-o" aria-hidden="true" />
                        <input
                            id="imageUpload"
                            type="file"
                            className={styles.fileInput}
                            onChange={this.handleImageUpload}
                        />
                    </Menu.Item>
                </label>
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
                <div className={styles.canvasOptionDisabled}>
                    <Menu.Item disabled>
                        <Icon inverted color="grey" name="square" />
                    </Menu.Item>
                </div>
                <Menu.Item
                    name="undo"
                    active={activeCanvasOption === 'undo'}
                    onClick={this.handleCanvasOptionsClick}
                >
                    <i className="fa fa-undo" aria-hidden="true" />
                </Menu.Item>
                <Menu.Item
                    name="redo"
                    active={activeCanvasOption === 'redo'}
                    onClick={this.handleCanvasOptionsClick}
                >
                    <i className="fa fa-repeat" aria-hidden="true" />
                </Menu.Item>
                <Menu.Item
                    name="clear"
                    active={activeCanvasOption === 'clear'}
                    onClick={this.handleCanvasOptionsClick}
                >
                    <i className="fa fa-trash" aria-hidden="true" />
                </Menu.Item>
            </Menu>
        );
    }

    render() {
        return (
            <Aux>
                <div className={styles.mainHeader}>{MSG_HOME_MAIN_HEADER}</div>
                <div className={styles.canvasOptions}>{this.renderCanvasOptions()}</div>
                <canvas id="collage-canvas" className={styles.canvas} />
                <Grid divided="vertically">
                    <GridRow columns={2}>
                        <GridColumn>
                            <div className={styles.body}>
                                <div className={styles.bodyHeader}>Instructions</div>
                                <List as="ol">
                                    <List.Item as="li">Signing Up</List.Item>
                                    <List.Item as="li">User Benefits</List.Item>
                                    <List.Item as="li">User Types</List.Item>
                                    <List.Item as="li">Deleting Your Account</List.Item>
                                </List>
                            </div>
                        </GridColumn>
                        <GridColumn>
                            <div className={styles.body}>
                                <div className={styles.bodyHeader}>Contribute</div>
                                <PersonalDetailsForm
                                    createPersonalDetails={this.handleCreatePersonalDetails}
                                />
                            </div>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Aux>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    const { createPersonalDetails } = actions.home;

    return {
        createPersonalDetails: bindActionCreators(createPersonalDetails, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(Home);

import React, { Component } from 'react';
import { Menu, Header, Button, Confirm } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fabric } from 'fabric';
import find from 'lodash/find';
import has from 'lodash/has';

import styles from './Task.scss';
import actions from '../../store/actions';
import {
    defaultCanvas,
    defaultCollage,
    dataURItoBlob,
} from '../../utils/Canvas/helper';

class Task extends Component {
    constructor(props) {
        super(props);

        const { findTask, findCollage } = this.props;
        findTask({});
        findCollage({});

        this.state = {
            activeTaskId: null,
            activeTaskDetails: null,
            modalApprove: false,
            modalReject: false,
        };
    }

    componentDidMount() {
        this.taskCanvas = new fabric.StaticCanvas('task-canvas', defaultCanvas);
        this.collageCanvas = new fabric.StaticCanvas('collage-canvas', defaultCanvas);
    }

    componentDidUpdate() {
        const { collage } = this.props;

        if (has(collage, 'url')) {
            fabric.util.loadImage(collage.url, (imgObj) => {
                const backgroundImage = new fabric.Image(imgObj);
                this.collageCanvas.setBackgroundImage(
                    backgroundImage,
                    this.collageCanvas.renderAll.bind(this.collageCanvas),
                );
            }, null, { crossOrigin: '*' });
        }
    }

    handleTaskClick = (e, { id }) => {
        const { taskList } = this.props;
        const activeTaskDetails = find(taskList, { _id: id });
        const canvasObject = JSON.stringify({ objects: activeTaskDetails.drawing });

        this.clearCanvas();
        this.setState({ activeTaskId: id });
        this.setState({ activeTaskDetails });
        this.taskCanvas.loadFromJSON(
            canvasObject,
            this.taskCanvas.renderAll.bind(this.taskCanvas),
        );
        this.collageCanvas.loadFromJSON(
            canvasObject,
            this.collageCanvas.renderAll.bind(this.collageCanvas),
        );
    };

    handleTaskDecision = (decision) => {
        const { updateTask, findTask, createAsset } = this.props;
        const { activeTaskDetails } = this.state;
        const collageCanvasDataUrl = this.collageCanvas.toDataURL(defaultCollage);
        const collageBlobData = dataURItoBlob(collageCanvasDataUrl);
        const taskCanvasDataUrl = this.taskCanvas.toDataURL(defaultCollage);
        const taskBlobData = dataURItoBlob(taskCanvasDataUrl);

        updateTask({
            ...activeTaskDetails,
            status: decision,
            updatedOn: new Date(),
            file: collageBlobData,
        });
        createAsset({
            file: taskBlobData,
        });
        findTask({});
        this.resetState();
        this.clearCanvas();
        this.scrollToTop();
    };

    scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    toggleModalApprove = () => {
        const newStatus = !this.state.modalApprove;
        this.setState({ modalApprove: newStatus });
    };

    toggleModalReject = () => {
        const newStatus = !this.state.modalReject;
        this.setState({ modalReject: newStatus });
    };

    resetState = () => {
        const state = {
            activeTaskId: null,
            activeTaskDetails: null,
            modalApprove: false,
            modalReject: false,
        };

        this.setState({ ...state });
    };

    clearCanvas = () => {
        this.taskCanvas.clear();
    };

    hasActiveTask = () => !this.state.activeTaskDetails;

    renderTaskList = () => {
        const { activeTaskId } = this.state;
        const { taskList } = this.props;

        return (
            <Menu vertical>
                {taskList.map(task => (
                    <Menu.Item
                        id={task._id}
                        key={task._id}
                        name={task.name}
                        active={activeTaskId === `${task._id}`}
                        onClick={this.handleTaskClick}
                    >
                        <div className={styles.taskName}>{task.name} / {task.class}</div>
                        <div className={styles.taskCreatedOn}>{task.createdOn}</div>
                        <div className={styles.taskEmail}>{task.email}</div>
                    </Menu.Item>
                ))}
            </Menu>
        );
    };

    render() {
        const { modalApprove, modalReject } = this.state;

        return (
            <div className={styles.container}>
                {this.renderTaskList()}
                <div className={styles.content}>
                    <Header as="h1">Contribution Vetting</Header>
                    <canvas id="task-canvas" className={styles.canvas} />
                    <div className={styles.decisionButton}>
                        <Button.Group fluid size="large">
                            <Button
                                positive
                                disabled={this.hasActiveTask()}
                                onClick={this.toggleModalApprove}
                            >Approve
                            </Button>
                            <Confirm
                                header="APPROVAL"
                                content="Confirm APPROVE this contribution?"
                                cancelButton="Cancel"
                                confirmButton="Approve"
                                open={modalApprove}
                                onCancel={this.toggleModalApprove}
                                onConfirm={() => this.handleTaskDecision('approved')}
                                size="tiny"
                            />
                            <Button.Or />
                            <Button
                                negative
                                disabled={this.hasActiveTask()}
                                onClick={this.toggleModalReject}
                            >Reject
                            </Button>
                            <Confirm
                                header="REJECTION"
                                content="Confirm REJECT this contribution?"
                                cancelButton="Cancel"
                                confirmButton="Reject"
                                open={modalReject}
                                onCancel={this.toggleModalReject}
                                onConfirm={() => this.handleTaskDecision('rejected')}
                                size="tiny"
                            />
                        </Button.Group>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ task, collage }) => ({
    taskList: task.taskList,
    collage: collage.collage,
});

const mapDispatchToProps = (dispatch) => {
    const { findTask, updateTask } = actions.task;
    const { findCollage, createAsset } = actions.collage;

    return {
        findTask: bindActionCreators(findTask, dispatch),
        updateTask: bindActionCreators(updateTask, dispatch),
        findCollage: bindActionCreators(findCollage, dispatch),
        createAsset: bindActionCreators(createAsset, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);

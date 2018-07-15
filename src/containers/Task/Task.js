import React, { Component } from 'react';
import { Menu, Header, Button, Confirm } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fabric } from 'fabric';
import find from 'lodash/find';

import styles from './Task.scss';
import actions from '../../store/actions';
import { defaultCanvas } from '../../utils/Canvas/helper';

class Task extends Component {
    constructor(props) {
        super(props);

        const { findTask } = this.props;
        findTask({});

        this.state = {
            activeTaskId: null,
            activeTaskDetails: null,
            modalApprove: false,
            modalReject: false,
        };
    }

    componentDidMount() {
        this.taskCanvas = new fabric.StaticCanvas('task-canvas', defaultCanvas);
    }

    handleTaskClick = (e, { id }) => {
        const { taskList } = this.props;
        const activeTaskDetails = find(taskList, { _id: id });
        const canvasObject = JSON.stringify({ objects: activeTaskDetails.drawing });

        this.clearCanvas();
        this.setState({ activeTaskId: id });
        this.setState({ activeTaskDetails });
        this.taskCanvas.loadFromJSON(canvasObject, this.taskCanvas.renderAll.bind(this.taskCanvas));
    };

    handleTaskApprove = () => {
        const { updateTask, findTask } = this.props;
        const { activeTaskDetails } = this.state;

        updateTask({
            ...activeTaskDetails,
            status: 'approved',
        });
        findTask({});
        this.resetState();
        this.clearCanvas();
        this.scrollToTop();
    };

    handleTaskReject = () => {
        const { updateTask, findTask } = this.props;
        const { activeTaskDetails } = this.state;

        updateTask({
            ...activeTaskDetails,
            status: 'rejected',
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
                                onConfirm={this.handleTaskApprove}
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
                                onConfirm={this.handleTaskReject}
                                size="tiny"
                            />
                        </Button.Group>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ task }) => ({
    taskList: task.taskList,
});

const mapDispatchToProps = (dispatch) => {
    const { findTask, updateTask } = actions.task;

    return {
        findTask: bindActionCreators(findTask, dispatch),
        updateTask: bindActionCreators(updateTask, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);

import React, { Component } from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './Task.scss';
import actions from '../../store/actions';

class Task extends Component {
    constructor(props) {
        super(props);

        const { findTask } = this.props;
        findTask({});

        this.state = {
            activeTask: null,
        };
    }

    handleTaskClick = (e, { id }) => this.setState({ activeTask: id });

    renderTaskList = () => {
        const { activeTask } = this.state;
        const { taskList } = this.props;

        return (
            <Menu vertical>
                {taskList.map(task => (
                    <Menu.Item
                        id={task._id}
                        key={task._id}
                        name={task.name}
                        active={activeTask === `${task._id}`}
                        onClick={this.handleTaskClick}
                    >
                        <div className={styles.taskName}>{task.name}</div>
                        <div className={styles.taskClass}>{task.class}</div>
                        <div className={styles.taskEmail}>{task.email}</div>
                    </Menu.Item>
                ))}
            </Menu>
        );
    };

    render() {
        return (
            <div className={styles.container}>
                {this.renderTaskList()}
                <div className={styles.content}>
                    <div>
                        <Header as="h1">Contribution Vetting</Header>
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
    const { findTask } = actions.task;

    return {
        findTask: bindActionCreators(findTask, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);

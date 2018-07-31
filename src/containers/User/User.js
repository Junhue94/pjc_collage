import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListTable from '../../components/Table/ListTable';
import styles from './User.scss';
import actions from '../../store/actions';

class User extends Component {
    constructor(props) {
        super(props);

        const { findTask } = this.props;
        findTask({});

        this.state = {
            userTableHeader: [
                {
                    field: 'name',
                    name: 'Name',
                },
                {
                    field: 'class',
                    name: 'Class',
                },
                {
                    field: 'email',
                    name: 'Email',
                },
                {
                    field: 'status',
                    name: 'Status',
                },
                {
                    field: 'createdOn',
                    name: 'Created On',
                },
            ],
        };
    }

    render() {
        const { taskList } = this.props;
        const { userTableHeader } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <Header as="h1">Personal Details List</Header>
                </div>
                <ListTable
                    dataList={taskList}
                    headerList={userTableHeader}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(User);

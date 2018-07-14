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

        const { findUser } = this.props;
        findUser({});

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
        const { userList } = this.props;
        const { userTableHeader } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <Header as="h1">Personal Details List</Header>
                </div>
                <ListTable
                    dataList={userList}
                    headerList={userTableHeader}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userList: state.user.userList,
});

const mapDispatchToProps = (dispatch) => {
    const { findUser } = actions.user;

    return {
        findUser: bindActionCreators(findUser, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);

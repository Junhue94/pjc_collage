import { SET_USER_LIST } from '../actionTypes';
import UserService from '../../../api/user-service';
import { errorNotification } from '../../../utils/Notification/notificationType';

const userService = new UserService();

const setUserList = userList => ({
    type: SET_USER_LIST,
    userList,
});

export const findUser = params => dispatch => userService
    .findUser(params)
    .then((res) => {
        dispatch(setUserList(res));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to retrieve user list', error));
    });

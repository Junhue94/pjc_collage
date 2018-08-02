import { SET_LOGOUT } from '../actionTypes';
import LogoutService from '../../../api/logout-service';
import { errorNotification } from '../../../utils/Notification/notificationType';

const logoutService = new LogoutService();

const setLogout = logout => ({
    type: SET_LOGOUT,
    logout,
});

export const findLogout = params => dispatch => logoutService
    .findLogout(params)
    .then((res) => {
        dispatch(setLogout(res));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to logout', error));
    });

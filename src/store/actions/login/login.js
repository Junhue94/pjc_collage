import { SET_LOGIN } from '../actionTypes';
import LoginService from '../../../api/login-service';
import { errorNotification } from '../../../utils/Notification/notificationType';

const loginService = new LoginService();

const setLogin = login => ({
    type: SET_LOGIN,
    login,
});

export const createLogin = credentials => dispatch => loginService
    .createLogin(credentials)
    .then((res) => {
        dispatch(setLogin(res));
        if (!res.success) {
            dispatch(errorNotification('Fail to login', 'Invalid Credentials'));
        }
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to login', error));
    });

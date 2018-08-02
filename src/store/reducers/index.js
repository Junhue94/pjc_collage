import { combineReducers } from 'redux';
import { reducer as notificationsReducer } from 'reapop';
import { reducer as formReducer } from 'redux-form';

import login from './login/login';
import logout from './logout/logout';
import task from './task/task';
import uploadAssetTmp from './uploadAssetTmp/uploadAssetTmp';
import uploadCollage from './uploadCollage/uploadCollage';
import { defaultNotification } from '../../utils/Notification/notificationType';

const rootReducer = combineReducers({
    notifications: notificationsReducer(defaultNotification),
    form: formReducer,
    login,
    logout,
    task,
    uploadAssetTmp,
    uploadCollage,
});

export default rootReducer;

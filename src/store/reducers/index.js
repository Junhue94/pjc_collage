import { combineReducers } from 'redux';
import { reducer as notificationsReducer } from 'reapop';
import { reducer as formReducer } from 'redux-form';

import user from './user/user';
import task from './task/task';
import uploadAssetTmp from './uploadAssetTmp/uploadAssetTmp';
import uploadCollage from './uploadCollage/uploadCollage';
import { defaultNotification } from '../../utils/Notification/notificationType';

const rootReducer = combineReducers({
    notifications: notificationsReducer(defaultNotification),
    form: formReducer,
    user,
    task,
    uploadAssetTmp,
    uploadCollage,
});

export default rootReducer;

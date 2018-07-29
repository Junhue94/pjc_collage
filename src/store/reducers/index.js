import { combineReducers } from 'redux';
import { reducer as notificationsReducer } from 'reapop';
import { reducer as formReducer } from 'redux-form';

import user from './user/user';
import task from './task/task';
import upload from './upload/upload';
import collage from './collage/collage';
import { defaultNotification } from '../../utils/Notification/notificationType';

const rootReducer = combineReducers({
    notifications: notificationsReducer(defaultNotification),
    form: formReducer,
    user,
    task,
    upload,
    collage,
});

export default rootReducer;

import { combineReducers } from 'redux';
import { reducer as notificationsReducer } from 'reapop';
import { reducer as formReducer } from 'redux-form';

import home from './home/home';
import categorySettings from './settings/category';
import { defaultNotification } from '../../utils/Notification/notificationType';

const rootReducer = combineReducers({
    notifications: notificationsReducer(defaultNotification),
    form: formReducer,
    home,
    categorySettings,
});

export default rootReducer;

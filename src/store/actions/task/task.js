import { SET_TASK_LIST } from '../actionTypes';
import TaskService from '../../../api/task-service';
import { errorNotification } from '../../../utils/Notification/notificationType';

const taskService = new TaskService();

const setTaskList = taskList => ({
    type: SET_TASK_LIST,
    taskList,
});

export const findTask = params => dispatch => taskService
    .findTask(params)
    .then((res) => {
        dispatch(setTaskList(res));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to retrieve task list', error));
    });

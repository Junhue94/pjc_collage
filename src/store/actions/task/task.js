import { SET_TASK_LIST } from '../actionTypes';
import TaskService from '../../../api/task-service';
import { successNotification, errorNotification } from '../../../utils/Notification/notificationType';

const taskService = new TaskService();

const setTaskList = taskList => ({
    type: SET_TASK_LIST,
    taskList,
});

export const createTask = personalDetails => dispatch => taskService
    .createTask(personalDetails)
    .then(() => {
        dispatch(successNotification('Personal Details', 'Details saved successfully!'));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to save personal details', error));
    });


export const findTask = params => dispatch => taskService
    .findTask(params)
    .then((res) => {
        dispatch(setTaskList(res));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to retrieve task list', error));
    });

export const updateTask = taskDetails => dispatch => taskService
    .updateTask(taskDetails)
    .then(() => {
        dispatch(successNotification('Task', 'Task updated successfully!'));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to update task', error));
    });

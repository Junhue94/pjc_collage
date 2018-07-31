import { CREATE_TASK, FIND_TASK, UPDATE_TASK } from './task-mock-result';

const TaskMockHook = {
    before: {
        create(hook) {
            hook.result = CREATE_TASK;
        },
        update(hook) {
            hook.result = UPDATE_TASK;
        },
        find(hook) {
            hook.result = FIND_TASK;
        },
    },
};

export default TaskMockHook;

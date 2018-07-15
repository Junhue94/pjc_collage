import { FIND_TASK, UPDATE_TASK } from './task-mock-result';

const TaskMockHook = {
    before: {
        find(hook) {
            hook.result = FIND_TASK;
        },
        update(hook) {
            hook.result = UPDATE_TASK;
        },
    },
};

export default TaskMockHook;

import { findTask } from './task-mock-result';

const TaskMockHook = {
    before: {
        find(hook) {
            hook.result = findTask;
        },
    },
};

export default TaskMockHook;

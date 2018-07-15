import { TASK_SERVICE } from './services';
import TaskMockHook from './_mock/task/task-mock-hook';

class TaskService {
    constructor() {
        this.service = TASK_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(TaskMockHook);
        }
    }

    findTask(params) {
        return this.service.find({ params });
    }

    updateTask(taskDetails) {
        return this.service.update(taskDetails._id, taskDetails);
    }
}

export default TaskService;

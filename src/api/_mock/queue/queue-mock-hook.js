import queueMockResult from './queue-mock-result';
import { QUEUE_LIST } from '../query';

/**
 * Queue Mock Hook
 */
export const QueueMockHook = {
    before: {
        find(hook) {
            // Return result based on query
            switch (hook.params.query) {
                case QUEUE_LIST:
                    hook.result = queueMockResult.getQueueList();
                    break;
                default:
                    hook.result = {};
            }
        },
    },
};

export default QueueMockHook;

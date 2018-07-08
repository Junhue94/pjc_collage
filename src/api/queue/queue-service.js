import { QUEUE_SERVICE } from '../services';
import QueueMockHook from '../_mock/queue/queue-mock-hook';

/**
 * API Queue Service
 */
class QueueService {
    constructor() {
        this.service = QUEUE_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(QueueMockHook);
        }
    }
    /**
     * Get Queue List
     * @param query
     */
    getQueueList(query) {
        return this.service.find({ query });
    }
}

export default QueueService;

import * as actionTypes from './actionTypes';

const queueActions = {
    getQueueList(queueList) {
        return {
            type: actionTypes.GET_QUEUE_LIST,
            queueList,
        };
    },
};

export default queueActions;

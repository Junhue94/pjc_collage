import { SET_TASK_LIST } from '../../actions/actionTypes';

const initialState = {
    taskList: [],
};

const reducer = (state = initialState, { type, taskList }) => {
    switch (type) {
        case SET_TASK_LIST:
            return {
                ...state,
                taskList,
            };
        default:
            return state;
    }
};

export default reducer;

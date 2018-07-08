import * as actionTypes from '../actions/actionTypes';

const initialState = {
    queueList: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_QUEUE_LIST:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducer;

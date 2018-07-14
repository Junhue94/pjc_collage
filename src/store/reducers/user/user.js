import { SET_USER_LIST } from '../../actions/actionTypes';

const initialState = {
    userList: [],
};

const reducer = (state = initialState, { type, userList }) => {
    switch (type) {
        case SET_USER_LIST:
            return {
                ...state,
                userList,
            };
        default:
            return state;
    }
};

export default reducer;

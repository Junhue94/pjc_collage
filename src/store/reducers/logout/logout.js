import { SET_LOGOUT } from '../../actions/actionTypes';

const initialState = {
    success: false,
};

const reducer = (state = initialState, { type, logout }) => {
    switch (type) {
        case SET_LOGOUT:
            return {
                ...state,
                ...logout,
            };
        default:
            return state;
    }
};

export default reducer;

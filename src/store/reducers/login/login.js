import { SET_LOGIN } from '../../actions/actionTypes';

const initialState = {
    success: false,
};

const reducer = (state = initialState, { type, login }) => {
    switch (type) {
        case SET_LOGIN:
            return {
                ...state,
                ...login,
            };
        default:
            return state;
    }
};

export default reducer;

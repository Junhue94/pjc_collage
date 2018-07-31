import { SET_COLLAGE } from '../../actions/actionTypes';

const initialState = {
    collage: null,
};

const reducer = (state = initialState, { type, collage }) => {
    switch (type) {
        case SET_COLLAGE:
            return {
                ...state,
                collage,
            };
        default:
            return state;
    }
};

export default reducer;

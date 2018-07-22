import { SET_IMAGE_URL } from '../../actions/actionTypes';

const initialState = {
    image: {
        url: null,
    },
};

const reducer = (state = initialState, { type, image }) => {
    switch (type) {
        case SET_IMAGE_URL:
            return {
                ...state,
                image,
            };
        default:
            return state;
    }
};

export default reducer;

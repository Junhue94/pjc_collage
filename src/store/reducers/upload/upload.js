import { SET_IMAGE_ASSET_TMP } from '../../actions/actionTypes';

const initialState = {
    image: {
        url: null,
        key: null,
    },
};

const reducer = (state = initialState, { type, image }) => {
    switch (type) {
        case SET_IMAGE_ASSET_TMP:
            return {
                ...state,
                image,
            };
        default:
            return state;
    }
};

export default reducer;

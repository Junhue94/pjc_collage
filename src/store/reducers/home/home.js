import { SET_PERSONAL_DETAILS_LIST } from '../../actions/actionTypes';

const initialState = {
    personalDetailsList: null,
};

const reducer = (state = initialState, { type, personalDetailsList }) => {
    switch (type) {
        case SET_PERSONAL_DETAILS_LIST:
            return {
                ...state,
                personalDetailsList,
            };
        default:
            return state;
    }
};

export default reducer;

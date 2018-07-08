import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    categoryList: null,
    categoryContent: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CATEGORY_SETTINGS_LIST:
            return {
                ...state,
                categoryList: action.categoryList,
            };
        case actionTypes.SET_CATEGORY_CONTENT:
            return {
                ...state,
                categoryContent: action.categoryContent,
            };
        default:
            return state;
    }
};

export default reducer;

import * as actionTypes from '../../actions/actionTypes';
import reducer from './category';
import CategorySettingsMockResult from '../../../api/_mock/settings/category-mock-result';

describe('Category Reducer', () => {
    test('should return the initial state', () => {
        const initialState = {
            categoryList: null,
            categoryContent: null,
        };
        
        expect(reducer(initialState, {})).toEqual(initialState);
    });
    
    test('should handle SET_CATEGORY_SETTINGS_LIST', () => {
        const initialState = {
            categoryList: null,
        };
        
        expect(reducer(initialState, {
            type: actionTypes.SET_CATEGORY_SETTINGS_LIST,
            categoryList: CategorySettingsMockResult.findCategorySettingsList(),
        })).toEqual({
            categoryList: CategorySettingsMockResult.findCategorySettingsList(),
        });
    });
    
    test('should handle SET_CATEGORY_CONTENT', () => {
        const initialState = {
            categoryContent: null,
        };
        
        expect(reducer(initialState, {
            type: actionTypes.SET_CATEGORY_CONTENT,
            categoryContent: CategorySettingsMockResult.getCategory(),
        })).toEqual({
            categoryContent: CategorySettingsMockResult.getCategory(),
        });
    });
});
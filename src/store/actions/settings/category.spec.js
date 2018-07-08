import * as actionTypes from '../actionTypes';
import * as actions from '../';
import mockStore from '../../../../test/helper/mockStore';
import CategorySettingsMockResult from '../../../api/_mock/settings/category-mock-result';

// @TODO https://hackernoon.com/redux-testing-step-by-step-a-simple-methodology-for-testing-business-logic-8901670756ce
describe('Category Actions', () => {
    test('creates SET_CATEGORY_SETTINGS_LIST after category list had been fetched', () => {
        const store = mockStore({ categoryList: null });
        const expectedActions = [
            {
                type: actionTypes.SET_CATEGORY_SETTINGS_LIST,
                categoryList: CategorySettingsMockResult.findCategorySettingsList(),
            },
        ];
        
        return store
            .dispatch(actions.default.categorySettings.findCategorySettingsList())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            });
    });
    
    test('creates SET_CATEGORY_CONTENT after category had been fetched', () => {
        const store = mockStore({ categoryContent: null });
        const id = { id: '1' };
        const expectedActions = {
            type: actionTypes.SET_CATEGORY_CONTENT,
            categoryContent: CategorySettingsMockResult.getCategory(),
        };
        
        return store
            .dispatch(actions.default.categorySettings.getCategory(id))
            .then(() => {
                expect(store.getActions()[0]).toEqual(expectedActions)
            });
    });
});

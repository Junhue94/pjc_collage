import categorySettingsMockResult from './category-mock-result';
import { CATEGORY_SETTINGS_LIST } from '../query';

/**
* Category Settings Mock Hook
*/
export const CategorySettingsMockHook = {
    before: {
        create(hook) {
            hook.result = categorySettingsMockResult.createCategory();
        },
        get(hook) {
            hook.result = categorySettingsMockResult.getCategory();
        },
        patch(hook) {
            hook.result = categorySettingsMockResult.patchCategory();
        },
        find(hook) {
            switch (hook.params.query) {
                case CATEGORY_SETTINGS_LIST:
                    hook.result = categorySettingsMockResult.findCategorySettingsList();
                    break;
                default:
                    hook.result = {};
            }
        },
    },
};

export default CategorySettingsMockHook;

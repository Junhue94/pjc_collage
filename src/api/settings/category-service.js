import { CATEGORY_SETTINGS_SERVICE } from '../services';
import categorySettingsMockHook from '../_mock/settings/category-mock-hook';

/**
 * API Category Settings Service
 */
class CategorySettingsService {
    constructor() {
        this.service = CATEGORY_SETTINGS_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(categorySettingsMockHook);
        }
    }
    /**
     * Create Category
     * @param {Object} categoryDetails - category details object
     * @param {String} categoryDetails.name - category name
     */
    createCategory(categoryDetails) {
        return this.service.create(categoryDetails);
    }
    
    /**
     * Get Category
     * @param id
     */
    getCategory(id) {
        return this.service.get(id);
    }
    /**
     * Patch Category
     * @param id
     * @param categoryDetails
     */
    patchCategory(id, categoryDetails) {
        return this.service.patch(id, categoryDetails);
    }
    /**
     * Find Category Settings List
     * @param query
     */
    findCategorySettingsList(query) {
        return this.service.find({ query });
    }
}

export default CategorySettingsService;

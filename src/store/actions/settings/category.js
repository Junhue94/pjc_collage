import * as actionTypes from '../actionTypes';
import { successNotification, errorNotification } from '../../../utils/Notification/notificationType';
import CategorySettingsService from '../../../api/settings/category-service';
import { CATEGORY_SETTINGS_LIST } from '../../../api/_mock/query';

// Create service class
const categorySettingsService = new CategorySettingsService();

const setCategorySettingsList = categoryList => ({
    type: actionTypes.SET_CATEGORY_SETTINGS_LIST,
    categoryList,
});

const setCategoryContent = categoryContent => ({
    type: actionTypes.SET_CATEGORY_CONTENT,
    categoryContent,
});

export const findCategorySettingsList = () => dispatch => categorySettingsService
    .findCategorySettingsList(CATEGORY_SETTINGS_LIST)
    .then((res) => {
        dispatch(setCategorySettingsList(res));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to retrieve category list', error));
    });

export const createCategory = categoryDetails => dispatch => categorySettingsService
    .createCategory(categoryDetails)
    .then(() => {
        dispatch(findCategorySettingsList());
        dispatch(successNotification('Category', 'New category added'));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to create new category', error));
    });

export const patchCategory = categoryDetails => dispatch => categorySettingsService
    .patchCategory(categoryDetails.id, categoryDetails)
    .then(() => {
        dispatch(findCategorySettingsList());
        dispatch(successNotification('Category', 'Category Updated'));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to patch category', error));
    });

export const getCategory = id => dispatch => categorySettingsService
    .getCategory(id)
    .then(res => dispatch(setCategoryContent(res)))
    .catch((error) => {
        dispatch(errorNotification('Fail to get category', error));
    });

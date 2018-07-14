import feathersClient from '.';

export const HOME_SERVICE = feathersClient.service('api/home');
export const USER_SERVICE = feathersClient.service('api/user');

// Settings Services
export const CATEGORY_SETTINGS_SERVICE = feathersClient.service('category_settings');

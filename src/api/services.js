import feathersClient from '.';

export const HOME_SERVICE = feathersClient.service('home');
export const QUEUE_SERVICE = feathersClient.service('queue');

// Settings Services
export const CATEGORY_SETTINGS_SERVICE = feathersClient.service('category_settings');

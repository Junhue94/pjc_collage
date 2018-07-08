import feathersClient from '.';

export const QUEUE_SERVICE = feathersClient.service('queue');
export const PATIENT_SERVICE = feathersClient.service('patient');

// Settings Services
export const CATEGORY_SETTINGS_SERVICE = feathersClient.service('category_settings');

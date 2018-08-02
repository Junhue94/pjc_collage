import feathersClient from '.';

export const LOGIN_SERVICE = feathersClient.service('api/login');
export const LOGOUT_SERVICE = feathersClient.service('api/logout');
export const TASK_SERVICE = feathersClient.service('api/task');
export const UPLOAD_ASSET_TMP_SERVICE = feathersClient.service('api/upload_asset_tmp');
export const UPLOAD_COLLAGE_SERVICE = feathersClient.service('api/upload_collage');

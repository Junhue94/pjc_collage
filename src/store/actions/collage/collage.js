import { SET_COLLAGE } from '../actionTypes';
import CollageService from '../../../api/collage-service';
import { successNotification, errorNotification } from '../../../utils/Notification/notificationType';

const collageService = new CollageService();

const setCollage = collage => ({
    type: SET_COLLAGE,
    collage,
});

export const createAsset = imageFile => dispatch => collageService
    .createAsset(imageFile)
    .then(() => {
        dispatch(successNotification('Asset', 'Asset created successfully!'));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to create asset', error));
    });

export const findCollage = params => dispatch => collageService
    .findCollage(params)
    .then((res) => {
        dispatch(setCollage(res));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to retrieve collage url', error));
    });

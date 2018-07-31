import { SET_COLLAGE } from '../actionTypes';
import UploadCollageService from '../../../api/upload-collage-service';
import { successNotification, errorNotification } from '../../../utils/Notification/notificationType';

const uploadCollageService = new UploadCollageService();

const setCollage = collage => ({
    type: SET_COLLAGE,
    collage,
});

export const createCollage = imageFile => dispatch => uploadCollageService
    .createCollage(imageFile)
    .then(() => {
        dispatch(successNotification('Asset', 'Asset created successfully!'));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to create asset', error));
    });

export const findCollage = params => dispatch => uploadCollageService
    .findCollage(params)
    .then((res) => {
        dispatch(setCollage(res));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to retrieve collage url', error));
    });

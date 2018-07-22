import { successNotification, errorNotification } from '../../../utils/Notification/notificationType';
import UploadService from '../../../api/upload-service';
import { SET_IMAGE_URL } from '../actionTypes';

const uploadService = new UploadService();

const setImageUrl = image => ({
    type: SET_IMAGE_URL,
    image,
});

export const createImage = image => dispatch => uploadService
    .createImage(image)
    .then((res) => {
        dispatch(setImageUrl(res));
        dispatch(successNotification('Image', 'Image uploaded successfully!'));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to upload image', error));
    });

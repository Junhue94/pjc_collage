import { successNotification, errorNotification } from '../../../utils/Notification/notificationType';
import UploadService from '../../../api/upload-service';

const uploadService = new UploadService();

export const createImage = image => dispatch => uploadService
    .createImage(image)
    .then(() => {
        dispatch(successNotification('Image', 'Image uploaded successfully!'));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to upload image', error));
    });

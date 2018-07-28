import { successNotification, errorNotification } from '../../../utils/Notification/notificationType';
import UploadService from '../../../api/upload-service';
import { SET_IMAGE_ASSET_TMP } from '../actionTypes';

const uploadService = new UploadService();

const setImageUrl = image => ({
    type: SET_IMAGE_ASSET_TMP,
    image,
});

export const createAssetTmp = assetTmp => dispatch => uploadService
    .createAssetTmp(assetTmp)
    .then((res) => {
        dispatch(setImageUrl(res));
        dispatch(successNotification('Upload Image', 'Image uploaded successfully!'));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to upload image', error));
    });

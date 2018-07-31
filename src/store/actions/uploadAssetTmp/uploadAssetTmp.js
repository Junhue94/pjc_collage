import { successNotification, errorNotification } from '../../../utils/Notification/notificationType';
import UploadAssetTmpService from '../../../api/upload-asset-tmp-service';
import { SET_IMAGE_ASSET_TMP } from '../actionTypes';

const uploadAssetTmpService = new UploadAssetTmpService();

const setImageUrl = image => ({
    type: SET_IMAGE_ASSET_TMP,
    image,
});

export const createAssetTmp = assetTmp => dispatch => uploadAssetTmpService
    .createAssetTmp(assetTmp)
    .then((res) => {
        dispatch(setImageUrl(res));
        dispatch(successNotification('Upload Image', 'Image uploaded successfully!'));
    })
    .catch((error) => {
        dispatch(errorNotification('Fail to upload image', error));
    });

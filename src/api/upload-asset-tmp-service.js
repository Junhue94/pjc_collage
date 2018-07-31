import { UPLOAD_ASSET_TMP_SERVICE } from './services';
import UploadAssetTmpMockHook from './_mock/uploadAssetTmp/upload-asset-tmp-mock-hook';

class UploadAssetTmpService {
    constructor() {
        this.service = UPLOAD_ASSET_TMP_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(UploadAssetTmpMockHook);
        }
    }

    createAssetTmp(assetTmp) {
        return this.service.create(assetTmp);
    }
}

export default UploadAssetTmpService;

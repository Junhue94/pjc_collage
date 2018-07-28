import { UPLOAD_SERVICE } from './services';
import UploadMockHook from './_mock/upload/upload-mock-hook';

class UploadService {
    constructor() {
        this.service = UPLOAD_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(UploadMockHook);
        }
    }

    createAssetTmp(assetTmp) {
        return this.service.create(assetTmp);
    }
}

export default UploadService;

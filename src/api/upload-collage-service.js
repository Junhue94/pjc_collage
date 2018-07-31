import { UPLOAD_COLLAGE_SERVICE } from './services';
import UploadCollageMockHook from './_mock/uploadCollage/upload-collage-mock-hook';

class UploadCollageService {
    constructor() {
        this.service = UPLOAD_COLLAGE_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(UploadCollageMockHook);
        }
    }

    createCollage(imageFile) {
        return this.service.create(imageFile);
    }

    findCollage(params) {
        return this.service.find(params);
    }
}

export default UploadCollageService;

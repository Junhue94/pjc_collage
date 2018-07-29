import { COLLAGE_SERVICE } from './services';
import CollageMockHook from './_mock/collage/collage-mock-hook';

class CollageService {
    constructor() {
        this.service = COLLAGE_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(CollageMockHook);
        }
    }

    createAsset(imageFile) {
        return this.service.create(imageFile);
    }

    findCollage(params) {
        return this.service.find(params);
    }
}

export default CollageService;

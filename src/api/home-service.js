import { HOME_SERVICE } from './services';
import HomeMockHook from './_mock/home/home-mock-hook';

class HomeService {
    constructor() {
        this.service = HOME_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(HomeMockHook);
        }
    }

    createPersonalDetails(personalDetails) {
        return this.service.create(personalDetails);
    }
}

export default HomeService;

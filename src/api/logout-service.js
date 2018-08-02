import { LOGOUT_SERVICE } from './services';
import LogoutMockHook from './_mock/logout/logout-mock-hook';

class LogoutService {
    constructor() {
        this.service = LOGOUT_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(LogoutMockHook);
        }
    }

    findLogout(params) {
        return this.service.find({ params });
    }
}

export default LogoutService;

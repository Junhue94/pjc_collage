import { LOGIN_SERVICE } from './services';
import LoginMockHook from './_mock/login/login-mock-hook';

class LoginService {
    constructor() {
        this.service = LOGIN_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(LoginMockHook);
        }
    }

    createLogin(adminDetails) {
        return this.service.create(adminDetails);
    }
}

export default LoginService;

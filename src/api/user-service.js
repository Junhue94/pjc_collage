import { USER_SERVICE } from './services';
import UserMockHook from './_mock/user/user-mock-hook';

class UserService {
    constructor() {
        this.service = USER_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(UserMockHook);
        }
    }

    findUser(params) {
        return this.service.find({ params });
    }
}

export default UserService;

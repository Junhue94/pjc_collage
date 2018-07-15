import { FIND_USER } from './user-mock-result';

const UserMockHook = {
    before: {
        find(hook) {
            hook.result = FIND_USER;
        },
    },
};

export default UserMockHook;

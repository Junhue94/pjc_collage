import { findUser } from './user-mock-result';

const UserMockHook = {
    before: {
        find(hook) {
            hook.result = findUser;
        },
    },
};

export default UserMockHook;

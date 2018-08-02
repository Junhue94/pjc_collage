import { FIND_LOGOUT } from './logout-mock-result';

const LogoutMockHook = {
    before: {
        find(hook) {
            hook.result = FIND_LOGOUT;
        },
    },
};

export default LogoutMockHook;

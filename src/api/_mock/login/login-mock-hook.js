import { CREATE_LOGIN } from './login-mock-result';

const LoginMockHook = {
    before: {
        create(hook) {
            hook.result = CREATE_LOGIN;
        },
    },
};

export default LoginMockHook;

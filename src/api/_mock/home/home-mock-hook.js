import { CREATE_PERSONAL_DETAILS } from './home-mock-result';

const HomeMockHook = {
    before: {
        create(hook) {
            hook.result = CREATE_PERSONAL_DETAILS;
        },
    },
};

export default HomeMockHook;

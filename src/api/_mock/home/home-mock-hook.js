import { createPersonalDetails } from './home-mock-result';

const HomeMockHook = {
    before: {
        create(hook) {
            hook.result = createPersonalDetails;
        },
    },
};

export default HomeMockHook;

import {
    createPersonalDetails,
    findPersonalDetails,
} from './home-mock-result';

const HomeMockHook = {
    before: {
        create(hook) {
            hook.result = createPersonalDetails;
        },
        find(hook) {
            hook.result = findPersonalDetails;
        },
    },
};

export default HomeMockHook;

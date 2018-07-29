import { CREATE_ASSET, GET_COLLAGE } from './collage-mock-result';

const CollageMockHook = {
    before: {
        create(hook) {
            hook.result = CREATE_ASSET;
        },
        find(hook) {
            hook.result = GET_COLLAGE;
        },
    },
};

export default CollageMockHook;

import { CREATE_COLLAGE, GET_COLLAGE } from './upload-collage-mock-result';

const UploadCollageMockHook = {
    before: {
        create(hook) {
            hook.result = CREATE_COLLAGE;
        },
        find(hook) {
            hook.result = GET_COLLAGE;
        },
    },
};

export default UploadCollageMockHook;

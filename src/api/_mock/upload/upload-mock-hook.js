import { CREATE_UPLOAD } from './upload-mock-result';

const UploadMockHook = {
    before: {
        create(hook) {
            hook.result = CREATE_UPLOAD;
        },
    },
};

export default UploadMockHook;

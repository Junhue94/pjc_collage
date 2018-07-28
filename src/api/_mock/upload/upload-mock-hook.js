import { CREATE_ASSET_TMP } from './upload-mock-result';

const UploadMockHook = {
    before: {
        create(hook) {
            hook.result = CREATE_ASSET_TMP;
        },
    },
};

export default UploadMockHook;
